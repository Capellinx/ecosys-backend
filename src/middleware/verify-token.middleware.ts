import { NextFunction, Request, Response } from "express";
import Jwt from 'jsonwebtoken';
import { env } from "../env";
import { UnauthorizedError } from "../config/application-errors";

export class VerifyToken {
   static execute(req: Request, res: Response, next: NextFunction) {
      const bearer = req.headers.authorization;

      if (!bearer) {
         throw new UnauthorizedError("Token is required")
      }
      const [_, token] = bearer.split(' ');

      const secret = env.JWT_SECRET as string;

      Jwt.verify(token, secret);

      res.locals.decode = Jwt.decode(token);

      next();
   }
}