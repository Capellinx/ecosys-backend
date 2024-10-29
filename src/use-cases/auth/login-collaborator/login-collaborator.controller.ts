import { Request, Response } from "express";
import { LoginCollaboratorUseCase } from "./login-collaborator";


export class LoginCollaboratorController {
   constructor(
      private loginCollaboratorUseCase: LoginCollaboratorUseCase
   ) { }

   async hande(request: Request, response: Response): Promise<Response> {
      const { email, password } = request.body

      const collaborator = await this.loginCollaboratorUseCase.execute({
         email,
         password
      })

      return response.status(200).end()
   }
}