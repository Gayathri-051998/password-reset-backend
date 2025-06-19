import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();



app.use(cors({
  origin:'https://dynamic-nasturtium-e783a2.netlify.app/',
  credentials: true,
}));


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
res.send('Password reset API is live');
});

app.use('/api/auth', authRoutes);

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log('✅ Connected to MongoDB');
app.listen(process.env.PORT || 4000, '0.0.0.0', () =>
console.log(`🚀 Server running on port ${process.env.PORT || 4000}`)
);

})
.catch(err => console.error('❌ MongoDB connection error:', err));

