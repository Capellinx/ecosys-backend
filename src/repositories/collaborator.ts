import { Collaborator } from "../domain/entities/collaborator";
import { CreateCollaboratorDTO } from "../use-case/collaborator/create-collaborator/create-collaborator-dto";

export interface CollaboratorRepository {
   create(payload: Collaborator): Promise<void>
   findByEmail(email: string): Promise<CreateCollaboratorDTO | null>
}