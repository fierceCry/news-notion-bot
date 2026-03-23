import { Module } from '@nestjs/common';
import { OpenaiIntegrationService } from './openai-integration.service';
import { OpenaiIntegrationController } from './openai-integration.controller';

@Module({
  controllers: [OpenaiIntegrationController],
  providers: [OpenaiIntegrationService],
})
export class OpenaiIntegrationModule {}
