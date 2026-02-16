import { IdentificadorTipoDeducao } from "../dps/Dps.js";
import { DeducaoReducaoPadrao } from "./DeducaoReducaoPadrao.js";

export interface DeducaoReducao {
  indTipoDeducao: IdentificadorTipoDeducao;
  dedRed: DeducaoReducaoPadrao[];
}