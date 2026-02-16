import { IndicadorCpfCnpj, IndicadorInscricaoEstadual } from "../dps/Dps.js";
import { Endereco } from "./Endereco.js";
import { IdentificacaoExterior } from "./IdentificacaoExterior.js";

export interface Tomador {
  indCpfCnpj: IndicadorCpfCnpj;
  nroCpfCnpj?: string;
  idEstrangeiro?: IdentificacaoExterior;
  ie?: string;
  indIE?: IndicadorInscricaoEstadual;
  im?: string;
  xNome: string;
  end?: Endereco;
  fone?: string;
  email?: string;
}