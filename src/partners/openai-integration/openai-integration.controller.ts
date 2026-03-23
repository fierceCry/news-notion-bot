import { Controller } from '@nestjs/common';
import { OpenaiIntegrationService } from './openai-integration.service';

@Controller('openai-integration')
export class OpenaiIntegrationController {
  constructor(private readonly openaiIntegrationService: OpenaiIntegrationService) {}
}
