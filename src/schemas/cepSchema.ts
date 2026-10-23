import { z } from 'zod';

export const cepSchema = z
    .string()
    .trim()
    .regex(/^(\d{5}-?\d{3})?$/, 'Informe um CEP com 8 dígitos ou deixe o campo vazio.');
