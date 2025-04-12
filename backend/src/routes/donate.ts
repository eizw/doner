import express from "express";
import { Blockchain } from "../blockchain";

const router = express.Router();
const blockchain = new Blockchain();

router.post("/", async (req: any, res: any) => {
  const { donor, amount, message } = req.body;

  if (!donor || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid donation data" });
  }

  try {
    const block = await blockchain.addDonation({ donor, amount, message });
    res.status(201).json({ message: "Donation recorded in block", block });
  } catch (err) {
    res.status(500).json({ error: "Failed to add donation" });
  }
});

export default router;