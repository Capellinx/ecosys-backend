import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { BcryptService } from "../../../infra/services/bcrypt.service";
import { NodemailerService } from "../../../infra/services/nodemailer.service";
import { CreateCollaboratorUseCase } from "./create-collaborator";
import { CreateCollaboratorController } from "./create-collaborator.controller";

const collaboratorRepoDB = new CollaboratorRepoDB()

const bcryptService = new BcryptService()

const nodemailerService = new NodemailerService()

const collaboratorUseCase = new CreateCollaboratorUseCase(
   collaboratorRepoDB, 
   bcryptService,
   nodemailerService
)

const createCollaboratorController = new CreateCollaboratorController(collaboratorUseCase)

export { createCollaboratorController }
