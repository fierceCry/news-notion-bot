import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotionClientModule } from './partners/notion-client/notion-client.module';
import { OpenaiIntegrationModule } from './partners/openai-integration/openai-integration.module';
import { NewsCrawlerModule } from './partners/news-crawler/news-crawler.module';
import { DailyNewsWorkflowModule } from './application/daily-news-workflow/daily-news-workflow.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NotionClientModule,
    OpenaiIntegrationModule,
    NewsCrawlerModule,
    DailyNewsWorkflowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
