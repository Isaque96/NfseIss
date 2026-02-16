import { IndicadorCpfCnpj } from "../dps/Dps.js";
import { EnderecoNacional } from "./EnderecoNacional.js";

export interface Prestador {
  indCpfCnpj: IndicadorCpfCnpj;
  nroCpfCnpj: string;
  im?: string;
  xNome: string;
  xFant?: string;
  end?: EnderecoNacional;
  fone?: string;
  email?: string;
}