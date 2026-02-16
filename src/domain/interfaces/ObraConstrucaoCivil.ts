import { EnderecoNacional } from "./EnderecoNacional.js";

export interface ObraConstrucaoCivil {
  cObra: string;
  xObra?: string;
  end?: EnderecoNacional;
}