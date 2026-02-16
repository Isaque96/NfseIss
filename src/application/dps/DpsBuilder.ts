import { Dps } from '../../domain/interfaces/Dps.js';
import { DpsInput } from './DpsInputSchema.js';

export class DpsBuilder {
  /**
   * Converte o input validado pelo Zod para a entidade de domínio Dps,
   * realizando os cálculos de impostos automáticos.
   */
  static build(input: DpsInput): Dps {
    const { servico } = input;

    // Cálculos básicos de ISS
    const vServPrest = servico.valores.vServPrest;
    const pAliqISS = servico.tribMun.pAliqIss;

    // vBCISS (Base de Cálculo) normalmente é o valor do serviço 
    // menos deduções (que ignoraremos nesta versão inicial)
    const vBCISS = vServPrest;

    // Cálculo do valor do ISS (arredondado para 2 casas decimais)
    const vISS = parseFloat((vBCISS * (pAliqISS / 100)).toFixed(2));

    return {
      id: {
        cdps: input.cDps
      },
      cab: {
        cMunPrest: input.cMunPrest,
        tpAmb: input.tpAmb,
        tpEmi: input.tpEmi,
        verProc: input.verProc,
        dhProc: new Date()
      },
      prest: {
        indCpfCnpj: input.prestador.indCpfCnpj,
        nroCpfCnpj: input.prestador.nroCpfCnpj,
        xNome: input.prestador.xNome,
        im: input.prestador.IM
      },
      toma: {
        indCpfCnpj: input.tomador.indCpfCnpj,
        nroCpfCnpj: input.tomador.nroCpfCnpj,
        xNome: input.tomador.xNome,
        email: input.tomador.email,
        end: input.tomador.endereco
      },
      serv: {
        indOper: servico.indOper,
        cClass: servico.cClass,
        codServ: {
          cTribNac: servico.codServ.cTribNac,
          xDescServ: servico.codServ.xDescServ
        },
        valores: {
          vServPrest: vServPrest
        },
        tribMun: {
          indTribMun: servico.tribMun.indTribMun,
          cMunIncid: servico.tribMun.cMunIncid,
          indExigIss: servico.tribMun.indExigIss,
          vBciss: vBCISS,
          pAliqIss: pAliqISS,
          vIss: vISS,
          indIncentivo: servico.tribMun.indIncentivo
        }
      }
    };
  }
}