create table public."UserClaims" (
  "ClaimId" bigint not null,
  "UserId" bigint not null,
  "Inactive" boolean null,
  "System" boolean null,
  constraint "UserClaims_pkey" primary key ("ClaimId", "UserId"),
  constraint "UserClaims_ClaimId_fkey" foreign KEY ("ClaimId") references "Claims" ("Id"),
  constraint "UserClaims_UserId_fkey" foreign KEY ("UserId") references "Users" ("Id")
) TABLESPACE pg_default;