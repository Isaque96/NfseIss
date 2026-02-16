import { IndicadorTipoDeducao, IndicadorDocumentoDeducao } from "../dps/Dps.js";

export interface DeducaoReducaoPadrao {
  tpDeducao: IndicadorTipoDeducao;
  tpDoc?: IndicadorDocumentoDeducao;
  nroDoc?: string;
  vDeducao: number;
  xJustDeducao?: string;
}