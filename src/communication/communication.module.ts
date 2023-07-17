import { Module } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { CommunicationController } from './communication.controller';

@Module({
  providers: [CommunicationService],
  controllers: [CommunicationController]
})
export class CommunicationModule {}
