import { IndicadorPaisExterior } from "../dps/Dps.js";

export interface ComercioExterior {
  indPaisExterior: IndicadorPaisExterior;
  cPais: string;
  nProcesso?: string;
  tpMoeda?: string;
  vServMoeda?: number;
}