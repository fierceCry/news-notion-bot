import { Test, TestingModule } from '@nestjs/testing';
import { NotionClientService } from './notion-client.service';

describe('NotionClientService', () => {
  let service: NotionClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionClientService],
    }).compile();

    service = module.get<NotionClientService>(NotionClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
