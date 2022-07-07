import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default (config: ConfigService): MongooseModuleOptions => {
  const uri = config.get('database.mongodb_uri');
  return {
    uri,
  };
};
