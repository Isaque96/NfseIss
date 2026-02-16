import { EnderecoExterior } from "./EnderecoExterior.js";
import { EnderecoNacional } from "./EnderecoNacional.js";

export interface LocalPrestacao {
  end?: EnderecoNacional;
  endExt?: EnderecoExterior;
}