export interface Users {
  Id: number;
  Name: string | null;
  Email: string | null;
  PasswordHash: string | null;
  NickName: string | null;
  Picture: string | null;
  PhoneNumber: string | null;
  StatusId: number | null;
  EmailConfirmed: boolean | null;
  PhoneConfirmed: boolean | null;
  TermsConfirmed: boolean | null;
  Systema: boolean | null;
  CorporationId: number | null;
}
