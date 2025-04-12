import mongoose from "mongoose";

export type DonationTransaction = {
  donor: string;
  amount: number;
  message?: string;
  timestamp: number;
};

const transactionSchema = new mongoose.Schema<DonationTransaction>({
  donor: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  timestamp: { type: Number, required: true },
});

export const TransactionModel = mongoose.model("Transaction", transactionSchema);