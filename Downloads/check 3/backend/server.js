import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import courseRoutes from "./routes/courseroutes.js";
import authRoutes from './routes/authroutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);

const instructorRoutes = authRoutes; // alias authRoutes for instructors

app.use('/api/auth', authRoutes);
app.use('/api/instructors', authRoutes); // ✅ Use correct route handler

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
