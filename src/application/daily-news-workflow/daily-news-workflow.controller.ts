import { Controller, Get } from '@nestjs/common';
import { DailyNewsWorkflowService } from './daily-news-workflow.service';

@Controller('daily-news-workflow') // 최종 경로: /api/v1/daily-news-workflow
export class DailyNewsWorkflowController {
  constructor(private readonly dailyNewsWorkflowService: DailyNewsWorkflowService) {}

  @Get('test')
  async test() {
    try {
      const result = await this.dailyNewsWorkflowService.runTest();
      return {
        success: true,
        message: '노션 리포트 생성 성공!',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: '노션 리포트 생성 실패',
        error: error.message,
      };
    }
  }
}