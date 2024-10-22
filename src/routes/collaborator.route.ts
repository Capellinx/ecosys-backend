import { Router } from "express";
import { createCollaboratorController } from "../use-cases/auth/create-collaborator";
import { ZodRequestValidate } from "../middleware/zod-errors.middleware";
import { createCollaboratorSchema } from "../use-cases/auth/create-collaborator/create-collaborator-dto";


export const collaboratorRouter = Router()

collaboratorRouter.post(
   "/collaborator",
   ZodRequestValidate.execute({ body: createCollaboratorSchema }),
   async (request, response) => {
      return await createCollaboratorController.handle(request, response)
   }
)