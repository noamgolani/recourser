import express from "express";

import usersRouter from "./routers/users";
import resourcesRouter from "./routers/resources";

const app = express();

app.use(express.json());

app.use("/api/users/", usersRouter);
app.use("/api/resources/", resourcesRouter);

export default app;
