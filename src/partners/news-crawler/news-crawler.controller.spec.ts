import { Test, TestingModule } from '@nestjs/testing';
import { NewsCrawlerController } from './news-crawler.controller';
import { NewsCrawlerService } from './news-crawler.service';

describe('NewsCrawlerController', () => {
  let controller: NewsCrawlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsCrawlerController],
      providers: [NewsCrawlerService],
    }).compile();

    controller = module.get<NewsCrawlerController>(NewsCrawlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
