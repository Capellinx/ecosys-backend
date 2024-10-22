import { Router } from "express";
import { createCollaboratorController } from "../use-cases/auth/create-collaborator";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCollaboratorSchema } from "../use-cases/auth/create-collaborator/create-collaborator-dto";
import { approveCollaboratorController } from "../use-cases/collaborator/approve-collaborator";
import { approveCollaboratorSCchema } from "../use-cases/collaborator/approve-collaborator/approve-collaborator-dto";


export const collaboratorRouter = Router()

collaboratorRouter.post(
   "/collaborator",
   ZodRequestValidate.execute({ body: createCollaboratorSchema }),
   async (request, response) => {
      return await createCollaboratorController.handle(request, response)
   }
)

collaboratorRouter.post(
   "/collaborator/:id/approve",
   ZodRequestValidate.execute({ params: approveCollaboratorSCchema}),
   async (request, response) => {
      return await approveCollaboratorController.handle(request, response)
   }
)