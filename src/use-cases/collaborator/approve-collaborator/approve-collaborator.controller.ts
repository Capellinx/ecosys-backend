import { Request, Response } from "express";
import { ApproveCollaboratorUseCase } from "./approve-collaborator";


export class ApproveCollaboratorController {
   constructor(
      private approveCollaboratorUseCase: ApproveCollaboratorUseCase
   ) { }

   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      await this.approveCollaboratorUseCase.execute(id)

      return response.status(200).end()
   }
}