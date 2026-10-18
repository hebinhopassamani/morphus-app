import { Corporation } from '@security/entities/Corporations';

export interface Menu {
  id: number;
  Label: string | null;
  Url: string | null;
  Icon: string | null;
  Description: string | null;
  Systeam: boolean | null;
  Aplication: string | null;
  MenuId: number | null;
  CorporationId: number | null;

  corporation?: Corporation;
  parentMenu?: Menu;
  subMenus?: Menu[];
}
