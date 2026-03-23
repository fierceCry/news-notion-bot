import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiIntegrationController } from './openai-integration.controller';
import { OpenaiIntegrationService } from './openai-integration.service';

describe('OpenaiIntegrationController', () => {
  let controller: OpenaiIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiIntegrationController],
      providers: [OpenaiIntegrationService],
    }).compile();

    controller = module.get<OpenaiIntegrationController>(OpenaiIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
