import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiIntegrationService } from './openai-integration.service';

describe('OpenaiIntegrationService', () => {
  let service: OpenaiIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenaiIntegrationService],
    }).compile();

    service = module.get<OpenaiIntegrationService>(OpenaiIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
