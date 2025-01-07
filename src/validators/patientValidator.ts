import { z } from 'zod';

const patientSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters' }),
  photoUrl: z.string({ message: 'Invalid URL for photo' }),
  // another way to validate url is with: z.url()
});

export const validatePatientData = (data: unknown) => {
    // No need for try-catch block, safeParse will return this object: { success: true/false, error?: ZodError }
    return patientSchema.safeParse(data);
};
