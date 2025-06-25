export interface ContrivedExampleQueryParams {
  action?: Actions;
  businessId?: BusinessIds;
  userId?: UserIds;
}

const USER_IDS = [
  "123e4567-e89b-12d3-a456-426614174000",
  "111e4567-e89b-12d3-a456-426614174111",
  "222e4567-e89b-12d3-a456-426614174222",
  "333e4567-e89b-12d3-a456-426614174333",
  "444e4567-e89b-12d3-a456-426614174444",
  "555e4567-e89b-12d3-a456-426614174555",
  "666e4567-e89b-12d3-a456-426614174666",
  "777e4567-e89b-12d3-a456-426614174777",
  "888e4567-e89b-12d3-a456-426614174888",
] as const;

export const PERMISSIONS = {
  read: [
    "123e4567-e89b-12d3-a456-426614174000",
    "111e4567-e89b-12d3-a456-426614174111",
    "222e4567-e89b-12d3-a456-426614174222",
  ],
  write: [
    "333e4567-e89b-12d3-a456-426614174333",
    "123e4567-e89b-12d3-a456-426614174000",
    "444e4567-e89b-12d3-a456-426614174444",
  ],
  delete: [
    "555e4567-e89b-12d3-a456-426614174555",
    "666e4567-e89b-12d3-a456-426614174666",
    "123e4567-e89b-12d3-a456-426614174000",
  ],
  admin: [
    "777e4567-e89b-12d3-a456-426614174777",
    "888e4567-e89b-12d3-a456-426614174888",
  ],
};

export const BUSINESSES = [
  {
    id: "biz-001",
    name: "Acme Analytics",
    users: [
      "123e4567-e89b-12d3-a456-426614174000",
      "111e4567-e89b-12d3-a456-426614174111",
      "333e4567-e89b-12d3-a456-426614174333",
    ],
  },
  {
    id: "biz-002",
    name: "CloudCart",
    users: [
      "222e4567-e89b-12d3-a456-426614174222",
      "444e4567-e89b-12d3-a456-426614174444",
    ],
  },
  {
    id: "biz-003",
    name: "Peak Health",
    users: [
      "555e4567-e89b-12d3-a456-426614174555",
      "666e4567-e89b-12d3-a456-426614174666",
      "777e4567-e89b-12d3-a456-426614174777",
      "888e4567-e89b-12d3-a456-426614174888",
    ],
  },
] as const;

type BusinessData = typeof BUSINESSES;

export type BusinessIds = BusinessData[number]["id"];
export type UserIds = (typeof USER_IDS)[number];

export const ACTIONS = {
  view_dashboard: "read",
  read_reports: "read",
  list_users: "read",
  view_business_profile: "read",

  create_record: "write",
  update_settings: "write",
  invite_team_member: "write",
  respond_support_request: "write",

  remove_user: "delete",
  delete_record: "delete",
  cancel_subscription: "delete",

  manage_roles: "admin",
  transfer_ownership: "admin",
  view_audit_logs: "admin",
  configure_billing: "admin",
} as const;

export type Actions = keyof typeof ACTIONS;
