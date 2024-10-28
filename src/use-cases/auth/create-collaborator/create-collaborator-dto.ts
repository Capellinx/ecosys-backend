import { PersonType, Role } from "@prisma/client";
import { z } from "zod";

export const createCollaboratorSchema = z.object({
   name: z.string().min(1),
   email: z.string().email().min(1),
   matricula: z.string().optional(),
   cpf: z.coerce.string().min(1).max(11),
   phone: z.coerce.string().min(1).max(14),
   personType: z.nativeEnum(PersonType),
   role: z.nativeEnum(Role).optional(),
   unity_conservation: z.string()
})

export type CreateCollaboratorDTO = z.infer<typeof createCollaboratorSchema>