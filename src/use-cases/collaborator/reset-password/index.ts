import { CollaboratorRepoDB } from "../../../infra/repositories/collaborator-repo-db";
import { BcryptService } from "../../../infra/services/bcrypt.service";
import { ResetPasswordUseCase } from "./reset-password";
import { ResetPasswordController } from "./reset-password.controller";

const collaboratorRepoDB = new CollaboratorRepoDB()

const bcryptService = new BcryptService()

const resetPasswordUseCase = new ResetPasswordUseCase(
   collaboratorRepoDB,
   bcryptService
)

const resetPasswordController = new ResetPasswordController(resetPasswordUseCase)

export { resetPasswordController }