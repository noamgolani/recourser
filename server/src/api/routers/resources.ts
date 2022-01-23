import express from "express";

import { createNewResource } from "../controllers/resources";

const router = express.Router();

router.post("/", createNewResource);

export default router;
