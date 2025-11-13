import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import logRoutes from "./routes/logs.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/logs", logRoutes);

// Error Handler
app.use(errorHandler);

export default app;