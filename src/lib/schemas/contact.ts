import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("O email parece incorreto"),
  phone: z
    .string()
    .min(1, "O telefone é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length === 11, {
      message: "Deve conter 11 dígitos",
    }),
  subject: z.string().min(1, "O assunto é obrigatório"),
  message: z.string().min(1, "A mensagem é obrigatória"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
