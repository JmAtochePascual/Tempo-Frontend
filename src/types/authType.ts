import { z } from "zod";

// Schema to register
export const authRegisterSchema = z.object({
  name: z.string().min(3, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  password: z.string().min(8, { message: "Ingrese una contraseña válida" }),
  confirmPassword: z.string()
    .min(8, { message: "La confirmación de la contraseña es requerida" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});


// Schema to login
export const authLoginSchema = z.object({
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  password: z.string().min(8, { message: "Ingrese una contraseña válida" }),
})

// Schema to get profile
export const authProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
})

// Schema to get response message
export const authResponseMessage = z.object({
  message: z.string(),
});

export type TAuthRegister = z.infer<typeof authRegisterSchema>

export type TAuthLogin = z.infer<typeof authLoginSchema>

export type TAuthProfile = z.infer<typeof authProfileSchema>

export type TAuthResponseMessage = z.infer<typeof authResponseMessage>

export type TUser = Pick<TAuthRegister, "name">

export type TAuthLink = { to: string; text: string; strongText: string; }

export type TAuthLinks = TAuthLink[];


// API USER RAMDOM
export type TApiUser = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  login: {
    uuid: string;
  };
};

export type TApiUsers = {
  results: TApiUser[];
};