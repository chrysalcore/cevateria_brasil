import { z } from 'zod';

export const storedCartSchema = z.array(
    z.object({
        id: z.number().int(),
        quantity: z.number().int(),
    }),
);
