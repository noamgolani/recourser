import express from "express";

import { createNewResource, getAllResources } from "../controllers/resources";

const router = express.Router();

router.post("/", createNewResource);
router.get("/", getAllResources);

export default router;
