import { Controller } from '@nestjs/common';
import { NotionClientService } from './notion-client.service';

@Controller('notion-client')
export class NotionClientController {
  constructor(private readonly notionClientService: NotionClientService) {}
}
