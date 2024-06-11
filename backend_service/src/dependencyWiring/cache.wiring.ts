import { redisClient } from "../database/redisClient";
import { CacheService } from "../services/cache.service";
import { CacheController } from "../controllers/resetCache.controller";

const cacheService = new CacheService(redisClient);
const cacheController = new CacheController(cacheService);

export { cacheController };
