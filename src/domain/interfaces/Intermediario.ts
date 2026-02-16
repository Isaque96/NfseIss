import { IndicadorCpfCnpj } from "../dps/Dps.js";

export interface Intermediario {
  indCpfCnpj: IndicadorCpfCnpj;
  nroCpfCnpj: string;
  im?: string;
  xNome: string;
}