import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { NodemailerService } from "../../../infra/services/nodemailer.service";
import { RejectCollaboratorUseCase } from "./reject-collaborator";
import { RejectCollaboratorController } from "./reject-collaborator.controller";

const collaboratorRepoDB = new CollaboratorRepoDB()

const nodemailerService = new NodemailerService()

const rejectCollaboratorUseCase = new RejectCollaboratorUseCase(
   collaboratorRepoDB,
   nodemailerService
)

const rejectCollaboratorController = new RejectCollaboratorController(rejectCollaboratorUseCase)

export { rejectCollaboratorController }
