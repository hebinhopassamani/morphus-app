create table public."UserRoles" (
  "RoleId" bigint not null,
  "UserId" bigint not null,
  "Inactive" boolean null,
  "System" boolean null,
  constraint "UserRoles_pkey" primary key ("RoleId", "UserId"),
  constraint "UserRoles_RoleId_fkey" foreign KEY ("RoleId") references "Roles" ("Id"),
  constraint "UserRoles_UserId_fkey" foreign KEY ("UserId") references "Users" ("Id")
) TABLESPACE pg_default;