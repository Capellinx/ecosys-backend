import { NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";

export class ApproveCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository
   ) {}

   async execute(id: string): Promise<ApproveCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorRepository.findById(id)

      if(!collaborator) throw new NotFoundError("Collaborator not found")

      await this.collaboratorRepository.approve(id)

      // implements email service to notify user that his account was approved

      return {
         success: {
            id_collaborator: id,
            message: "Collaborator approved"
         }
      }
   }
} 

export namespace ApproveCollaboratorUseCase {
   export type Output = {
      success: {
         id_collaborator: string
         message: string
      }
   }
}