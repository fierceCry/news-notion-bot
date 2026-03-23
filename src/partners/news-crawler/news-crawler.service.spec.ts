import { Test, TestingModule } from '@nestjs/testing';
import { NewsCrawlerService } from './news-crawler.service';

describe('NewsCrawlerService', () => {
  let service: NewsCrawlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsCrawlerService],
    }).compile();

    service = module.get<NewsCrawlerService>(NewsCrawlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
