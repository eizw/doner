import crypto from "crypto";
import { BlockModel } from "./models/block";
import { DonationTransaction, TransactionModel } from "./models/transaction";

export type Block = {
  index: number;
  timestamp: number;
  transaction: DonationTransaction;
  previousHash: string;
  hash: string;
};

export class Blockchain {
  private chain: Block[] = [];

  constructor() {
    this.init();
  }

  private async init() {
    const blocks = await BlockModel.find().sort({ index: 1 }).lean();
    if (blocks.length > 0) {
      this.chain = blocks;
    } else {
      const genesis = await this.createGenesisBlock();
      this.chain.push(genesis);
    }
  }

  private async createGenesisBlock(): Promise<Block> {
    const genesisTransaction: DonationTransaction = {
      donor: "Genesis",
      amount: 0,
      message: "Genesis Block",
      timestamp: Date.now(),
    };

    const block: Block = {
      index: 0,
      timestamp: genesisTransaction.timestamp,
      transaction: genesisTransaction,
      previousHash: "0",
      hash: this.calculateHash(0, genesisTransaction.timestamp, genesisTransaction, "0"),
    };

    await new BlockModel(block).save();
    return block;
  }

  private calculateHash(index: number, timestamp: number, transaction: DonationTransaction, previousHash: string): string {
    const data = index + timestamp + JSON.stringify(transaction) + previousHash;
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  public async addDonation(tx: Omit<DonationTransaction, 'timestamp'>): Promise<Block> {
    const transaction: DonationTransaction = { ...tx, timestamp: Date.now() };
    const previousBlock = this.getLatestBlock();

    const newBlock: Block = {
      index: this.chain.length,
      timestamp: transaction.timestamp,
      transaction,
      previousHash: previousBlock.hash,
      hash: this.calculateHash(this.chain.length, transaction.timestamp, transaction, previousBlock.hash),
    };

    this.chain.push(newBlock);

    // Save to DB
    await new BlockModel(newBlock).save();
    await new TransactionModel(transaction).save();

    return newBlock;
  }

  public getChain(): Block[] {
    return this.chain;
  }

  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }
}