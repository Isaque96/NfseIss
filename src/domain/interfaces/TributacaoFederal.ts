import { PisCofins } from "./PisConfins.js";

export interface TributacaoFederal {
  vRetIrrf?: number;
  vRetCsll?: number;
  vRetPisPasep?: number;
  vRetCofins?: number;
  vRetInss?: number;
  pisCofins?: PisCofins;
}