import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.mjs'

dotenv.config();
const app = express();
const port = process.env.PORT;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log('Connected to MongoDB');
}

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
