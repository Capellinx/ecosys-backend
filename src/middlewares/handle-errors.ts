import { NextFunction, Request, Response } from "express";
import { ApplicationError } from '../config/application-errors';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";


export class HandleErrors {
   static handleErrors(
      error: Error | Partial<ApplicationError>, 
      request: Request, 
      response: Response, 
      next: NextFunction) {
      
      if(error instanceof ApplicationError) {
         return response.status(error.statusCode).json({
            error: error.message
         })
      }

      if (error instanceof PrismaClientKnownRequestError) {
         console.log(error);
         return response.status(500).json({ error: "Error in database" });
      }

      if(error instanceof ZodError){
         return response.status(500).json(error.errors);
      }

      next()
   }
}