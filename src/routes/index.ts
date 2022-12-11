import { Router } from "express";
import { createCatController } from "../controllers/cats";

export const initRoutes = () => {
  const router = new Router();

  const path = "/cats";
  const catController = createCatController();

  router.get(`${path}`, catController.getTopCatBreeds);

  return router;
};
