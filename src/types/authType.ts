import { z } from "zod";


// Schema to login
export const authLoginSchema = z.object({
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  password: z.string().min(8, { message: "Ingrese una contraseña válida" }),
})

// Schema to get response message
export const authResponseMessage = z.object({
  message: z.string(),
});

export type TAuthLogin = z.infer<typeof authLoginSchema>

export type TAuthResponseMessage = z.infer<typeof authResponseMessage>

export type TAuthLink = { to: string; text: string; strongText: string; }

export type TAuthLinks = TAuthLink[];
