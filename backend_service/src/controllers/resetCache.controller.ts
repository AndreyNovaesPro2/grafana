import { Request, Response, NextFunction } from "express";
import { CacheService } from "../services/cache.service";

export class CacheController {
  constructor(private cacheService: CacheService) {}

  resetCache = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.cacheService.resetCache();
      res.status(200).json({ message: "Cache reset successfully" });
    } catch (error) {
      next(error);
    }
  }
}