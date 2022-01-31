import express from "express";
import cors from "cors";

import usersRouter from "./routers/users";
import resourcesRouter from "./routers/resources";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users/", usersRouter);
app.use("/api/resources/", resourcesRouter);

export default app;
