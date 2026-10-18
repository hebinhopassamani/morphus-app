import { Corporation } from '@security/entities/Corporations';
import { SubModule } from '@security/entities/SubModules';

export interface Module {
  id: string;
  name: string;
  key: string;
  system: boolean;
  corporationId: string;
  description?: string;

  corporation?: Corporation;
  subModules?: SubModule[];
}
