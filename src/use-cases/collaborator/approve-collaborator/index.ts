import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { BcryptService } from "../../../infra/services/bcrypt.service";
import { NodemailerService } from "../../../infra/services/nodemailer.service";
import { ApproveCollaboratorUseCase } from "./approve-collaborator";
import { ApproveCollaboratorController } from "./approve-collaborator.controller";

const collaboratorRepoDb = new CollaboratorRepoDB()

const bcryptService = new BcryptService()

const nodemailerService = new NodemailerService()

const approveCollaboratorUseCase = new ApproveCollaboratorUseCase(
   collaboratorRepoDb,
   nodemailerService,
   bcryptService
)

const approveCollaboratorController = new ApproveCollaboratorController(approveCollaboratorUseCase)

export { approveCollaboratorController }