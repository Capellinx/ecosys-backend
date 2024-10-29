
import { CollaboratorRepoDB } from '../../../infra/repositories/collaborator-repo-db';
import { BcryptService } from '../../../infra/services/bcrypt.service';
import { JsonWebTokenService } from '../../../infra/services/jsonwebtoken.service';
import { LoginCollaboratorUseCase } from './login-collaborator';
import { LoginCollaboratorController } from './login-collaborator.controller';

const collaboratorRepoDB = new CollaboratorRepoDB()

const jsonWebTokenService = new JsonWebTokenService()

const bcryptService = new BcryptService()

const loginCollaboratorUseCase = new LoginCollaboratorUseCase(
   collaboratorRepoDB, 
   jsonWebTokenService, 
   bcryptService
)

const loginCollaboratorController = new LoginCollaboratorController(loginCollaboratorUseCase)

export { loginCollaboratorController }