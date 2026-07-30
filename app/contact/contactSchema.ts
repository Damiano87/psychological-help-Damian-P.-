import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Imię i nazwisko jest wymagane"),
  email: z
    .string()
    .trim()
    .min(1, "Adres e-mail jest wymagany")
    .email("Podaj poprawny adres e-mail"),
  phone: z.string().optional().default(""),
  message: z.string().trim().min(1, "Wiadomość jest wymagana"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
