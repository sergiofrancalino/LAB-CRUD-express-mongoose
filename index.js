import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";

// Routes Imports
import albumRoute from './routes/album.router.js';
import purchaseRoute from './routes/purchase.router.js';

const app = express();

dotenv.config();
connect();
app.use(express.json());

// ROUTES (Imported)

app.use("/album", albumRoute)
app.use("/purchase", purchaseRoute)

// Server Up 
app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}`);
});
