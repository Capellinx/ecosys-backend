import { z } from "zod";


export const inviteResetPasswordSchema = z.object({
   email: z.string().email().min(1)
})

export type InivteResetPasswordDTO = z.infer<typeof inviteResetPasswordSchema>