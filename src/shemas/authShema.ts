import { z } from "zod";

export const loginShema = z.object({
  email: z.string(),
  password: z.string(),
})

export const registerShema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  password_confirm: z.string(),
})


export const authMessageShema = z.object({
  message: z.string(),
})