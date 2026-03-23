import { Test, TestingModule } from '@nestjs/testing';
import { DailyNewsWorkflowService } from './daily-news-workflow.service';

describe('DailyNewsWorkflowService', () => {
  let service: DailyNewsWorkflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyNewsWorkflowService],
    }).compile();

    service = module.get<DailyNewsWorkflowService>(DailyNewsWorkflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
