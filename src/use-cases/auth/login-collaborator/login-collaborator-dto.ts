import { z } from "zod";

export const LoginCollaboratorSchema = z.object({
   email: z.string({ required_error: "Precisa ser uma string" }).email({ message: "E-mail é obrigatório" }),
   password: z.string({ required_error: "Precisa ser uma string" }).min(1)
})

export type LoginCollaboratorDTO = z.infer<typeof LoginCollaboratorSchema>