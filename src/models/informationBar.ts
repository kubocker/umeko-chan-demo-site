import { z } from 'zod';

export const informationBarSchema = z.object({
 text:
   z.string(),
 url:
   z.string().url().min(8, { message: '正しく記載しておりません' }),
});

export type InformationBarSchema = z.infer<typeof informationBarSchema>;
