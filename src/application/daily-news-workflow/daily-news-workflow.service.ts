import { Injectable } from '@nestjs/common';
import { NotionClientService } from '../../partners/notion-client/notion-client.service';

@Injectable()
export class DailyNewsWorkflowService {
  constructor(private readonly notionClient: NotionClientService) {}

  async runTest() {
    const today = new Date().toISOString().split('T')[0]; // 2026-03-16 형식
    
    // 테스트용 가짜 뉴스 데이터 리스트
    const mockNews = [
      {
        title: '비트코인 신고가 경신',
        summary: '비트코인이 AI 수요 급증과 맞물려 새로운 가격대에 진입했습니다.',
        url: 'https://example.com/news1',
      },
      {
        title: 'NestJS 11버전 발표',
        summary: '더욱 빨라진 성능과 새로운 데코레이터들이 추가되었습니다.',
        url: 'https://example.com/news2',
      },
    ];

    return await this.notionClient.createDailyReport(today, mockNews);
  }
}