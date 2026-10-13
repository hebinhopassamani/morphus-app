export interface Claims {
  Id: number;
  Type: string | null;
  Value: string | null;
  Description: string | null;
  ModuleId: number | null;
  SubModuleId: number | null;
  System: boolean | null;
  CorporationId: number | null;
}
