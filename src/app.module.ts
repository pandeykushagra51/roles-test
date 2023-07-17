import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { DbModule } from './db/db.module';
import { CommunicationModule } from './communication/communication.module';

@Module({
  imports: [RolesModule, DbModule, CommunicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
