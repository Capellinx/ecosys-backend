import { Router } from "express";
import { createCollaboratorController } from "../use-cases/auth/create-collaborator";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCollaboratorSchema } from "../use-cases/auth/create-collaborator/create-collaborator-dto";
import { approveCollaboratorController } from "../use-cases/collaborator/approve-collaborator";
import { approveCollaboratorSCchema } from "../use-cases/collaborator/approve-collaborator/approve-collaborator-dto";
import { LoginCollaboratorSchema } from "../use-cases/auth/login-collaborator/login-collaborator-dto";
import { loginCollaboratorController } from "../use-cases/auth/login-collaborator";
import { rejectCollaboratorController } from "../use-cases/collaborator/reject-collaborator";
import { rejectCollaboratorSCchema } from '../use-cases/collaborator/reject-collaborator/reject-collaborator-dto';
import { VerifyToken } from "../middleware/verify-token.middleware";


export const collaboratorRouter = Router()

collaboratorRouter.post(
   "/collaborator",
   ZodRequestValidate.execute({ body: createCollaboratorSchema }),
   async (request, response) => {
      return await createCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.put(
   "/collaborator/:id/approve",
   ZodRequestValidate.execute({ params: approveCollaboratorSCchema}),
   VerifyToken.execute,
   async (request, response) => {
      return await approveCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.post(
   "/collaborator/login",
   ZodRequestValidate.execute({ body: LoginCollaboratorSchema }),
   async (request, response) => {
      return await loginCollaboratorController.hande(request, response)
   }
)

collaboratorRouter.put(
   "/collaborator/:id/reject",
   VerifyToken.execute,
   ZodRequestValidate.execute({ params: rejectCollaboratorSCchema }),
   async (request, response) => {
      return await rejectCollaboratorController.handle(request, response)
   }
)