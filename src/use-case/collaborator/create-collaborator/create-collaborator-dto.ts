import { Role } from "@prisma/client";
import { z } from "zod";

export const collaboratorSchema = z.object({
   name: z.string().min(1),
   email: z.string().email().min(1),
   matricula: z.string().optional(),
   cpf: z.coerce.number().min(1).max(11),
   phone: z.coerce.number().min(1).max(14),
   password: z.string(),
   personType: z.string(),
   role: z.nativeEnum(Role).optional(),
})

export type CreateCollaboratorDTO = z.infer<typeof collaboratorSchema>