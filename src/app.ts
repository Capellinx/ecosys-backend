import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet"
import { errorHandler } from "./middleware/handle-errors.middleware";
import { collaboratorRouter } from "./routes/collaborator.route";
const app = express();

app.use(json())
app.use(helmet())

app.use(collaboratorRouter)

app.use(errorHandler.execute);

export { app }