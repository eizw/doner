import mongoose from "mongoose";
import { env } from "@/utils/envConfig"
import { app } from "@/app"

// Connect to MongoDB
mongoose.connect(env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection failed:", err));

// Express server
const server = app.listen(env.PORT, () => {
  const { PORT } = env;
  console.log(`Server is now listening to port ${PORT}`)
})


// Handle shutdowns gracefully
const onCloseSignal = () => {
  console.log("SIGINT received, shutting down.");
  server.close(() => {
    console.log("Server has been closed.");
    process.exit();
  })

  // Incase cannot, force shutdown after 10s
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);