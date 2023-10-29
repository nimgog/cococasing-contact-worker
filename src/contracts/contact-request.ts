import { z } from 'zod';

export const contactRequestSchema = z.object({
  orderNumber: z.string().trim().nullable().optional(),
  fullName: z.string().trim(),
  emailAddress: z.string().trim().email(),
  phoneNumber: z.string().trim().nullable().optional(),
  message: z.string().trim().min(80).max(1000),
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;
