import { NewsHeadlineService } from './../news-headline/news-headline.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as Twitter from 'twitter';

@Injectable()
export class TwitterService {
  constructor(
    private configService: ConfigService,
    private newsHeadlineService: NewsHeadlineService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async tweet() {
    const client = new Twitter({
      consumer_key: this.configService.get('consumer_key'),
      consumer_secret: this.configService.get('consumer_secret'),
      access_token_key: this.configService.get('access_token_key'),
      access_token_secret: this.configService.get('access_token_secret'),
    });

    const randomHeadline = await this.newsHeadlineService.generateRandomHeadLine();

    const generatedTweet = { status: randomHeadline };

    await client.post('statuses/update', generatedTweet);
  }
}
