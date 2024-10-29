import { z } from "zod";


export const rejectCollaboratorSCchema = z
   .object({
      id: z.string(),
   }
   )