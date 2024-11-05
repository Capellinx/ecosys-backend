import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./reset-password";


export class ResetPasswordController {
   constructor(
      private resetPasswordUseCase: ResetPasswordUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { password, token } = request.body

      await this.resetPasswordUseCase.execute({ password, token })

      return response.status(204).end()
   }
}