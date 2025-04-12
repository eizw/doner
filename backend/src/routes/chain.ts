import express from "express";
import { Blockchain } from "../blockchain";

const router = express.Router();
const blockchain = new Blockchain();

router.get("/", async (req, res) => {
  try {
    const chain = blockchain.getChain();
    res.json(chain);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve blockchain" });
  }
});

export default router;