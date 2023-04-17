import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { initialize } from  "./models/db.js";
import {router as authRouter}from "./routes/authRouter.js";
import errorMiddleware from "./middlewares/error-middleware.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
      credentials: true,
      origin: [process.env.CLIENT_URL_1, process.env.CLIENT_URL_2],
    })
  );
app.use(express.json());
app.use(cookieParser());
app.use('/api', authRouter);
 app.use(errorMiddleware);
// app.use(authMiddleware);

// Initialize the database connection
initialize();


async function run() {
    try {
        app.listen(port, () => {
          console.log(`App listening on port ${port}`);
        });     
    } catch (err) {
        console.log(err.stack);
    }
}

run().catch(console.dir);




