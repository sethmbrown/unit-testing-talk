import express, { Request, Response } from "express";
import ViteExpress from "vite-express";
import {
  ACTIONS,
  Actions,
  BUSINESSES,
  BusinessIds,
  ContrivedExampleQueryParams,
  PERMISSIONS,
  UserIds,
} from "./constants";

const app = express();

app.get(
  "/contrived-example",
  (req: Request<{}, {}, {}, ContrivedExampleQueryParams>, res: Response) => {
    if (!req.query.userId) {
      res.status(401);
    }

    if (!req.query.businessId) {
      res.status(403);
    }

    if (!req.query.action) {
      res.status(400);
    }

    const { userId, businessId, action } = req.query as {
      userId: UserIds;
      businessId: BusinessIds;
      action: Actions;
    };

    const userPermissions = Object.entries(PERMISSIONS).reduce<string[]>(
      (acc, [permissionType, permissionList]) => {
        if (permissionList.includes(userId)) {
          acc.push(permissionType);
        } else {
          acc.push("none");
        }

        return acc;
      },
      []
    );

    const business = BUSINESSES.find((business) => business.id === businessId);

    const actionPermissionLevel = ACTIONS[action];

    const isPermittedToAction = userPermissions.includes(actionPermissionLevel);

    if (!isPermittedToAction) {
      res.status(403).send("NOT_PERMITTED");
      return;
    }

    res.status(200).send({
      userPermissions,
      business,
    });
  }
);

export default app;

ViteExpress.listen(
  app,
  3000,
  () => console.log("Server is listening on port 3000...") // istanbul ignore next
);
