import { Module } from '@nestjs/common';
import { NotionClientService } from './notion-client.service';
import { NotionClientController } from './notion-client.controller';

@Module({
  controllers: [NotionClientController],
  providers: [NotionClientService],
  exports: [NotionClientService],
})
export class NotionClientModule {}
