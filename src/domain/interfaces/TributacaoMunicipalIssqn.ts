import { TipoTributacao, IndicadorExigibilidadeIss, IndicadorIncentivoFiscal, RegimeEspecialTributacao } from "../dps/Dps.js";

export interface TributacaoMunicipalIssqn {
  indTribMun: TipoTributacao;
  cMunIncid: string;
  cPaisIncid?: string;
  indExigISS: IndicadorExigibilidadeIss;
  vBCISS: number;
  pAliqISS: number;
  vISS: number;
  indIncentivo: IndicadorIncentivoFiscal;
  regEspTrib?: RegimeEspecialTributacao;
  vRedBCISS?: number;
}