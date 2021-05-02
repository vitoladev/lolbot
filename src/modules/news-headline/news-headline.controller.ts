import { NewsHeadlineService } from './news-headline.service';
import { BaseController } from '../base/base.controller';
import { Controller, Get } from '@nestjs/common';

@Controller('headline')
export class NewsHeadlineController extends BaseController {
  constructor(private newsHeadlineService: NewsHeadlineService) {
    super(newsHeadlineService);
  }

  @Get('/random')
  async random() {
    return await this.newsHeadlineService.generateRandomHeadLine();
  }
}
