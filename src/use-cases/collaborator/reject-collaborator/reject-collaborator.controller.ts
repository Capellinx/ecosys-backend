import { Request, Response } from "express";
import { RejectCollaboratorUseCase } from "./reject-collaborator";


export class RejectCollaboratorController {

   constructor(
      private rejectCollaboratorUseCase: RejectCollaboratorUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      await this.rejectCollaboratorUseCase.execute(id)

      return response.status(200).end()
   }
}
