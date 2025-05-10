import express from "express";
import { board } from "../controllers/board.controller.js";

const router = express.Router();

router.get("/board", board);

export default router;
