import express from "express";
import donateRoutes from "./routes/donate";
import chainRoutes from "./routes/chain";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/donate", donateRoutes);
app.use("/chain", chainRoutes);

export { app }