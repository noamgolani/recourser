import express from "express";

import { createNewRecourse } from "../controllers/resources";

const router = express.Router();

router.post("/", createNewRecourse);

export default router;
