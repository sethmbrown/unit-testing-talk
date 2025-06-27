import { describe, expect, test } from "vitest";
import request from "supertest";
import app from "./main";
import { ContrivedExampleQueryParams } from "./constants";

describe("/contrived-example", () => {
  test("should return 200", async () => {
    const query: ContrivedExampleQueryParams = {
      userId: "123e4567-e89b-12d3-a456-426614174000",
      businessId: "biz-001",
      action: "cancel_subscription",
    };

    const res = await request(app).get("/contrived-example").query(query);

    expect(res.status).toBe(200);
  });
});
