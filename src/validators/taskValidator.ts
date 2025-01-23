import { z } from 'zod';

const taskSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long' }),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .max(255, { message: 'Description is too long' }),
  status: z.enum(['TO_DO', 'IN_PROGRESS', 'DONE'], {
    message: 'Invalid status',
  }),
});

export const validateTaskData = (data: unknown) => {
  return taskSchema.safeParse(data);
};
