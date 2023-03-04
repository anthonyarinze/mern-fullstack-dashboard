import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/perfromance/:id", getUserPerformance);

export default router;
