import { z } from 'zod';
import {
  Ambiente,
  TipoEmitente,
  IndicadorCpfCnpj,
  TipoTributacao,
  IndicadorExigibilidadeIss,
  IndicadorIncentivoFiscal,
  IndicadorOperacao,
  ClassificacaoTributaria
} from '../../domain/dps/Dps.js';

// Helper para strings numéricas (CPF, CNPJ, CEP, IBGE)
const numericString = (len?: number) =>
  z.string().regex(/^\d+$/, "Deve conter apenas números").refine(val => !len || val.length === len, {
    message: `Deve ter exatamente ${len} dígitos`
  });

export const DpsInputSchema = z.object({
  // Identificador e Cabeçalho
  cDps: z.string().min(1).max(32),
  cMunPrest: numericString(7),
  tpAmb: z.nativeEnum(Ambiente),
  tpEmi: z.nativeEnum(TipoEmitente),
  verProc: z.string().min(1).max(20),

  // Prestador
  prestador: z.object({
    indCpfCnpj: z.nativeEnum(IndicadorCpfCnpj),
    nroCpfCnpj: z.string().min(11).max(14),
    xNome: z.string().min(1).max(300),
    IM: z.string().optional(),
  }),

  // Tomador
  tomador: z.object({
    indCpfCnpj: z.nativeEnum(IndicadorCpfCnpj),
    nroCpfCnpj: z.string().min(11).max(14).optional(),
    xNome: z.string().min(1).max(300),
    email: z.string().email().optional(),
    endereco: z.object({
      end: z.string().min(1),
      nro: z.string().min(1),
      bairro: z.string().min(1),
      cMun: numericString(7),
      cep: numericString(8),
    }).optional(),
  }),

  // Serviço e Valores
  servico: z.object({
    indOper: z.nativeEnum(IndicadorOperacao),
    cClass: z.nativeEnum(ClassificacaoTributaria),
    codServ: z.object({
      cTribNac: z.string().min(1), // NBS
      xDescServ: z.string().min(1).max(1000),
    }),
    valores: z.object({
      vServPrest: z.number().positive(),
    }),
    tribMun: z.object({
      indTribMun: z.nativeEnum(TipoTributacao),
      cMunIncid: numericString(7),
      indExigIss: z.nativeEnum(IndicadorExigibilidadeIss),
      pAliqIss: z.number().min(0).max(100),
      indIncentivo: z.nativeEnum(IndicadorIncentivoFiscal),
    }),
  }),
});

export type DpsInput = z.infer<typeof DpsInputSchema>;