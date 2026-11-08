import { z } from 'zod';

export const cepSchema = z
    .string()
    .trim()
    .regex(/^(\d{5}-?\d{3})?$/);
