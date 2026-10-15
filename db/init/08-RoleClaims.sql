create table public."RoleClaims" (
  "RoleId" bigint not null,
  "ClaimId" bigint not null,
  "Inactive" boolean null,
  "System" boolean null,
  constraint "RoleClaims_pkey" primary key ("RoleId", "ClaimId"),
  constraint "RoleClaims_ClaimId_fkey" foreign KEY ("ClaimId") references "Claims" ("Id"),
  constraint "RoleClaims_RoleId_fkey" foreign KEY ("RoleId") references "Roles" ("Id")
) TABLESPACE pg_default;