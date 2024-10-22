import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { ApproveCollaboratorUseCase } from "./approve-collaborator";
import { ApproveCollaboratorController } from "./approve-collaborator.controller";

const collaboratorRepoDb = new CollaboratorRepoDB()

const approveCollaboratorUseCase = new ApproveCollaboratorUseCase(collaboratorRepoDb)

const approveCollaboratorController = new ApproveCollaboratorController(approveCollaboratorUseCase)

export { approveCollaboratorController }