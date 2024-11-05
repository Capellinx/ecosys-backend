import { Request, Response } from "express";
import { InviteResetPasswordUseCase } from "./invite-reset-password";

export class InviteResetPasswordController {
   constructor(
      private inviteResetPasswordUseCase: InviteResetPasswordUseCase
   ) { }

   async handle(request: Request, response: Response) {
      const { email } = request.body

      await this.inviteResetPasswordUseCase.execute({ email })

      return response.status(200).json({ message: "emaill enviado" })
   }
}
