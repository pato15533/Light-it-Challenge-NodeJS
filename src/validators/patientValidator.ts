import { z } from 'zod';

const patientSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(255, { message: 'Name is too long' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(255, { message: 'Email is too long' }),
  phone: z
    .string()
    .min(8, { message: 'Phone number must be at least 8 characters' })
    .max(25, { message: 'Phone number is too long' }),
  photoUrl: z.string().url().min(1, { message: 'Invalid URL for photo' }),
  // For url, we can also just use z.string()
});

export const validatePatientData = (data: unknown) => {
  // No need for try-catch block, safeParse will return this object: { success: true/false, error?: ZodError }
  return patientSchema.safeParse(data);
};
