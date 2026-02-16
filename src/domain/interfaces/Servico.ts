import { IndicadorOperacao, ClassificacaoTributaria } from "../dps/Dps.js";
import { AtividadeEvento } from "./AtividadeEvento.js";
import { CodigoServico } from "./CodigoServico.js";
import { ComercioExterior } from "./ComercioExterior.js";
import { DeducaoReducao } from "./DeducaoReducao.js";
import { Descontos } from "./Descontos.js";
import { InformacoesComplementaresServico } from "./InformacoesComplementaresServico.js";
import { ObraConstrucaoCivil } from "./ObraConstrucaoCivil.js";
import { TotaisTributos } from "./TotaisTributos.js";
import { TributacaoFederal } from "./TributacaoFederal.js";
import { TributacaoMunicipalIssqn } from "./TributacaoMunicipalIssqn.js";
import { ValoresServicoPrestado } from "./ValoresServicoPrestado.js";

export interface Servico {
  indOper: IndicadorOperacao;
  cClass: ClassificacaoTributaria;
  codServ: CodigoServico;
  comExt?: ComercioExterior;
  obra?: ObraConstrucaoCivil;
  atvEvt?: AtividadeEvento;
  infComp?: InformacoesComplementaresServico;
  valores: ValoresServicoPrestado;
  desc?: Descontos;
  dedRed?: DeducaoReducao;
  tribMun: TributacaoMunicipalIssqn;
  tribFed?: TributacaoFederal;
  totTrib?: TotaisTributos;
}