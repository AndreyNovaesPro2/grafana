import { IRedisConnection } from "../interfaces/IRedisDatabaseConnection";

export class CacheService {
  constructor(private IRedisConnection: IRedisConnection) {}

  async resetCache(): Promise<void> {
    await this.IRedisConnection.flushall();
  }
}
