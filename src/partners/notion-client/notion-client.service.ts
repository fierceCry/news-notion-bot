import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from '@notionhq/client';

@Injectable()
export class NotionClientService implements OnModuleInit {
  private notion: Client;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.notion = new Client({
      auth: this.configService.get<string>('NOTION_TOKEN'),
    });
  }

  async createDailyReport(
    date: string,
    newsList: { title: string; summary: string; url: string }[],
  ) {
    const parentPageId = this.configService.get<string>('NOTION_DATABASE_ID')!;

    // 1. 뉴스 리스트를 노션의 '불렛 아이템' 블록 형태로 변환합니다.
    const blocks = newsList.flatMap((news) => [
      {
        object: 'block',
        type: 'heading_3',
        heading_3: { rich_text: [{ text: { content: news.title } }] },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            { text: { content: news.summary + ' ' } },
            { text: { content: '[원문보기]', link: { url: news.url } } },
          ],
        },
      },
    ]);

    // 2. 노션 페이지 생성 (제목은 날짜)
    return await this.notion.pages.create({
      parent: {
        page_id: parentPageId,
      },
      properties: {
        // [수정] title 안에 다시 title을 넣어야 합니다. (노션 API 규칙)
        title: {
          title: [
            {
              text: { content: `${date} 오늘의 뉴스 리포트` },
            },
          ],
        },
      },
      children: blocks as any,
    });
  }
}
