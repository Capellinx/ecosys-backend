import { NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { EncryptedPasswordService } from "../../../domain/services/encrypted-password.service";
import { ResetPasswordDTO } from "./reset-password-dto";
import jwt, { JwtPayload } from "jsonwebtoken";

export class ResetPasswordUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private encryptedPasswrodService: EncryptedPasswordService
   ) { }

   async execute({ password, token }: ResetPasswordDTO): Promise<void> {
      const decodeToken = jwt.decode(token) as JwtPayload;

      const collaborator = await this.collaboratorRepository.findById(decodeToken.id)

      if (!collaborator) throw new NotFoundError("Colaborador não foi encontrado.")

      const newPassword = await this.encryptedPasswrodService.encrypt(password)

      await this.collaboratorRepository.updatePassword(decodeToken.id, newPassword)

      return
   }
}