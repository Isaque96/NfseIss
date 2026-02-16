import { TipoTributacao, IndicadorExigibilidadeIss, IndicadorIncentivoFiscal, RegimeEspecialTributacao } from "../dps/Dps.js";

export interface TributacaoMunicipalIssqn {
  indTribMun: TipoTributacao;
  cMunIncid: string;
  cPaisIncid?: string;
  indExigIss: IndicadorExigibilidadeIss;
  vBciss: number;
  pAliqIss: number;
  vIss: number;
  indIncentivo: IndicadorIncentivoFiscal;
  regEspTrib?: RegimeEspecialTributacao;
  vRedBciss?: number;
}