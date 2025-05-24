import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import { GuestModel } from './models/Guest';
import rsvpRoutes from './routes/rsvpRoutes'; 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Anslut till MongoDB
const mongoDbUrl = process.env.MONGODB_URL || ""; 
const PORT = process.env.DB_PORT || 4000; 

if (!mongoDbUrl) {
    console.error('MongoDB URL saknas!');
    process.exit(1);
}
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);
mongoose.connection.once('open', () => {
  console.log('✅ MongoDB ansluten till:', mongoose.connection.name);
});


// 🧭 Använd routes
app.use('/rsvp', rsvpRoutes);

// 👇 Root-route för att undvika 404 på /
app.get("/", (_req, res) => {
  res.send("🎉 RSVP-backend är igång!");
});

// 🟢 Starta servern
app.listen(PORT, () => console.log(`Servern körs på http://localhost:${PORT}`));
