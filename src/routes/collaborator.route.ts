import { Router } from "express";
import { createCollaboratorController } from "../use-cases/auth/create-collaborator";


export const collaboratorRouter = Router()

collaboratorRouter.post(
   "/collaborator",
   async (request, response) => {
      return await createCollaboratorController.handle(request, response)
   }
)