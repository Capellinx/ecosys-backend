import { BadRequestError, NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { LoginCollaboratorDTO } from "./login-collaborator-dto";
import { TokenService } from '../../../domain/services/token.service';
import { EncryptedPasswordService } from '../../../domain/services/encrypted-password.service';


export class LoginCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private tokenService: TokenService,
      private encryptedPasswordService: EncryptedPasswordService
   ) { }

   async execute({ email, password }: LoginCollaboratorDTO): Promise<LoginCollaboratorUseCase.Output> {
      const collaborator = await this.collaboratorRepository.findByEmail(email)

      if (!collaborator) throw new NotFoundError("Colaborador não foi encontrado!")

      const passwordMatch = await this.encryptedPasswordService.compare(password, collaborator.password)

      if (!passwordMatch) throw new BadRequestError("E-mail ou senha inválido!")

      const access_token = this.tokenService.generateToken({
         id: collaborator.id,
         unity_conservation: collaborator.unity_conservation
      })

      return {
         access_token,
         collaborator: {
            id: collaborator.id,
            name: collaborator.name,
            email: collaborator.email,
            personType: collaborator.person_type,
            unity_conservation: collaborator.unity_conservation
         }
      }
   }
}

export namespace LoginCollaboratorUseCase {
   export type Output = {
      access_token: string
      collaborator: {
         id: string
         name: string
         email: string
         personType: string
         unity_conservation: string
      }
   }
}