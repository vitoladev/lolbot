import { NewsHeadlineModule } from './../news-headline/news-headline.module';
import { TwitterService } from './twitter.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    NewsHeadlineModule,
  ],
  providers: [TwitterService],
})
export class TwitterModule {}
