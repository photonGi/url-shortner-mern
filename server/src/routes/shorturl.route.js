import express from "express";
import {
  createShortUrl,
  redirectUrl,
} from "../controllers/shorturl.controller.js";
const router = express.Router();

router.post("/create", createShortUrl);
router.get("/:id", redirectUrl);

export default router;
