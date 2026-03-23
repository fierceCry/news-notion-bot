import { Module } from '@nestjs/common';
import { DailyNewsWorkflowService } from './daily-news-workflow.service';
import { DailyNewsWorkflowController } from './daily-news-workflow.controller';
import { NotionClientModule } from 'src/partners/notion-client/notion-client.module';

@Module({
  imports: [NotionClientModule],
  controllers: [DailyNewsWorkflowController],
  providers: [DailyNewsWorkflowService],
})
export class DailyNewsWorkflowModule {}
