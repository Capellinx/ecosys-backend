import { Request, Response } from "express";
import { CreateCollaboratorUseCase } from "./create-collaborator";

export class CreateCollaboratorController {
   constructor(
      private createCollaboratorUseCase: CreateCollaboratorUseCase
   ){}

   async handle(request: Request, response: Response): Promise<Response> { 
      const { name, email, personType, cpf, phone, role, matricula, unity_conservation } = request.body;

      const data = await this.createCollaboratorUseCase.execute({
         name,
         email,
         personType,
         cpf,
         phone,
         role,
         matricula,
         unity_conservation
      })

      return response.status(201).json(data)
   }
}