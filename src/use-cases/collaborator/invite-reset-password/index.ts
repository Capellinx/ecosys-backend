import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { JsonWebTokenService } from "../../../infra/services/jsonwebtoken.service";
import { NodemailerService } from "../../../infra/services/nodemailer.service";
import { InviteResetPasswordUseCase } from "./invite-reset-password";
import { InviteResetPasswordController } from "./invite-reset-password.controller";

const collaboratorRepoDB = new CollaboratorRepoDB()

const jsonWebTokenService = new JsonWebTokenService()

const nodemailerService = new NodemailerService()

const inviteResetPasswordUseCase = new InviteResetPasswordUseCase(
   collaboratorRepoDB,
   jsonWebTokenService,
   nodemailerService
)

const inviteResetPasswordController = new InviteResetPasswordController(inviteResetPasswordUseCase)

export { inviteResetPasswordController }