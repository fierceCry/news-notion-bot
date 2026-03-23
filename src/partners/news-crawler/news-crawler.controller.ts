import { Controller } from '@nestjs/common';
import { NewsCrawlerService } from './news-crawler.service';

@Controller('news-crawler')
export class NewsCrawlerController {
  constructor(private readonly newsCrawlerService: NewsCrawlerService) {}
}
