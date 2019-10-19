import express from "express";

import { mcDonaldRouter } from "./macdonald";

export const restRouter = express.Router();

restRouter.use('/mcdonalds', mcDonaldRouter);

