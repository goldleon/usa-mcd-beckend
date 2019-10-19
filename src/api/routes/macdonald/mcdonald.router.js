import express from "express";

import mcDonaldController from "./mcdonald.controller";

export const mcDonaldRouter = express.Router();

mcDonaldRouter.route('/').get(mcDonaldController.getAll)
mcDonaldRouter.route('/:id').get(mcDonaldController.getSearchedTermData)