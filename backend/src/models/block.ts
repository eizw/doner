import mongoose from "mongoose";
import { Block } from "../blockchain"
import { DonationTransaction } from "./transaction";

const blockSchema = new mongoose.Schema<Block>({
  index: Number,
  timestamp: Number,
  transaction: Object,
  previousHash: String,
  hash: String
});

export const BlockModel = mongoose.model("Block", blockSchema);