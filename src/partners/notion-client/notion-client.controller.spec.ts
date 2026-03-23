import { Test, TestingModule } from '@nestjs/testing';
import { NotionClientController } from './notion-client.controller';
import { NotionClientService } from './notion-client.service';

describe('NotionClientController', () => {
  let controller: NotionClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotionClientController],
      providers: [NotionClientService],
    }).compile();

    controller = module.get<NotionClientController>(NotionClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
