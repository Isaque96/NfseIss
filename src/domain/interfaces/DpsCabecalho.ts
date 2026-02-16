import { Ambiente, TipoEmitente } from "../dps/Dps.js";

export interface DpsCabecalho {
  cMunPrest: string;
  tpAmb: Ambiente;
  tpEmi: TipoEmitente;
  verProc: string;
  dhProc: Date;
}