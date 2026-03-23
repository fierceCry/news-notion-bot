import { Test, TestingModule } from '@nestjs/testing';
import { DailyNewsWorkflowController } from './daily-news-workflow.controller';
import { DailyNewsWorkflowService } from './daily-news-workflow.service';

describe('DailyNewsWorkflowController', () => {
  let controller: DailyNewsWorkflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyNewsWorkflowController],
      providers: [DailyNewsWorkflowService],
    }).compile();

    controller = module.get<DailyNewsWorkflowController>(DailyNewsWorkflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
