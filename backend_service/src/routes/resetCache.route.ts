import { Router } from "express";
import { CacheController } from "../controllers/resetCache.controller";

export const createCacheRouter = (cacheController: CacheController) => {
  const cacheRouter = Router();

  cacheRouter.delete("/", cacheController.resetCache);

  return cacheRouter;
};
