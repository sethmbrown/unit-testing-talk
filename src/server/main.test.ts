import { describe, expect, test } from "vitest";
import request from "supertest";
import app from "./main";
import { ContrivedExampleQueryParams } from "./constants";

describe("/contrived-example", () => {
  test("should return 200", async () => {
    const query: ContrivedExampleQueryParams = {
      userId: "111e4567-e89b-12d3-a456-426614174111",
      businessId: "biz-001",
      action: "cancel_subscription",
    };

    const res = await request(app).get("/contrived-example").query(query);
    console.log("🚀 ~ test ~ res:", res.status);
  });
});
