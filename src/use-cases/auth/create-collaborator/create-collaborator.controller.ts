import { Request, Response } from "express";
import { CreateCollaboratorUseCase } from "./create-collaborator";

export class CreateCollaboratorController {
   constructor(
      private createCollaboratorUseCase: CreateCollaboratorUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> { 
      const { name, email, person_type, cpf, phone, role, matricula } = request.body;

      const data = await this.createCollaboratorUseCase.execute({
         name,
         email,
         personType: person_type,
         cpf,
         phone,
         role,
         matricula
      })

      return response.status(201).json(data)
   }
}