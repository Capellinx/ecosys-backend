import { z } from "zod";


export const resetPasswordSchema = z.object({
   password: z.string().min(1),
   token: z.string().min(1)
})

export type ResetPasswordDTO = z.infer<typeof resetPasswordSchema>