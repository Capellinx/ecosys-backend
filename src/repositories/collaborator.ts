import { CreateCollaboratorDTO } from "../use-case/collaborator/create-collaborator/create-collaborator-dto";

export interface CollaboratorRepository {
   create(payload: CreateCollaboratorDTO): Promise<void>
}