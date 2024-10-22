import { z } from "zod";


export const approveCollaboratorSCchema = z
   .object({
      id: z.string(),
   }
)