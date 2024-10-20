import { CreateCollaboratorDTO } from "../use-case/collaborator/create-collaborator/create-collaborator-dto";

export interface CollaboratorProps {
   create(payload: CreateCollaboratorDTO): Promise<void>
}