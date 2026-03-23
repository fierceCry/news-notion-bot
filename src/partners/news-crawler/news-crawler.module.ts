import { Module } from '@nestjs/common';
import { NewsCrawlerService } from './news-crawler.service';
import { NewsCrawlerController } from './news-crawler.controller';

@Module({
  controllers: [NewsCrawlerController],
  providers: [NewsCrawlerService],
})
export class NewsCrawlerModule {}
