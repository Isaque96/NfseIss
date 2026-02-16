import { DpsCabecalho } from "./DpsCabecalho.js";
import { DpsIdentificador } from "./DpsIdentificador.js";
import { DpsSubstituicao } from "./DpsSubstituicao.js";
import { Intermediario } from "./Intermediario.js";
import { LocalPrestacao } from "./LocalPrestacao.js";
import { Prestador } from "./Prestador.js";
import { Servico } from "./Servico.js";
import { Tomador } from "./Tomador.js";

/**
 * Entidade principal: DPS (Declaração de Prestação de Serviços)
 */
export interface Dps {
  id: DpsIdentificador;
  cab: DpsCabecalho;
  subst?: DpsSubstituicao;
  prest: Prestador;
  toma: Tomador;
  interm?: Intermediario;
  locPrest?: LocalPrestacao;
  serv: Servico;
}