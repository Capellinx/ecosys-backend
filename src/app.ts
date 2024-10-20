import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet"
import { errorHandler } from "./middlewares/handle-errors.middleware";
import { NextFunction, Request, Response } from "express-serve-static-core";
const app = express();

app.use(json())
app.use(helmet())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { errorHandler.execute });

export { app }