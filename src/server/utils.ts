import {
  Actions,
  ACTIONS,
  BUSINESSES,
  BusinessIds,
  ContrivedExampleQueryParams,
  PERMISSIONS,
  UserIds,
} from "./constants";

export const validateQueryParams = ({
  userId,
  businessId,
  action,
}: ContrivedExampleQueryParams): { status: number; message: string } | null => {
  if (!userId) {
    return { status: 401, message: "Unauthorized" };
  }

  if (!businessId) {
    return { status: 403, message: "Not permitted" };
  }

  if (!action) {
    return { status: 400, message: "Bad request" };
  }

  return null;
};

export const getUserPermissions = (userId: UserIds) => {
  return Object.entries(PERMISSIONS).reduce<string[]>(
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
};

export const getBusiness = (businessId: BusinessIds) => {
  return BUSINESSES.find((business) => business.id === businessId);
};

export const getIsPermittedToAction = ({
  action,
  userPermissions,
}: {
  action: Actions;
  userPermissions: string[];
}) => {
  const actionPermissionLevel = ACTIONS[action];

  return userPermissions.includes(actionPermissionLevel);
};
