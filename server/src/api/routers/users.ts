import express from "express";

import { getAllUsers } from "../controllers/users";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
