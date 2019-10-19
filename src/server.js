import express from "express";
import dotenv from "dotenv";

import { setGlobalMiddleware } from "./api/middlewares/globalMiddleware";

// Setup the ENV vars
if (process.env.NODE_ENV === "development") {
    dotenv.config();
}

const app = express();

const port = process.env.PORT;

// register Global Middleware
setGlobalMiddleware(app);

app.listen(port, () => {
    console.log(`Api running on Port ${port}`)
})