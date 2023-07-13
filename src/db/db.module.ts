import { Module } from '@nestjs/common';
import { Db } from './db';
import { dbProviders, spacesProviders } from './db.providers';

@Module({
  providers: [...dbProviders, ...spacesProviders],
  exports: [...dbProviders, ...spacesProviders],
})
export class DbModule { }
