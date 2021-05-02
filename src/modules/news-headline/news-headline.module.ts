import { LeagueModule } from './../league/league.module';
import { TeamModule } from './../team/team.module';
import { PersonModule } from './../person/person.module';
import { NewsHeadline } from '../../common/entities/news-headline.entity';
import { NewsHeadlineService } from './news-headline.service';
import { NewsHeadlineController } from './news-headline.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsHeadline]),
    PersonModule,
    TeamModule,
    LeagueModule,
  ],
  controllers: [NewsHeadlineController],
  providers: [NewsHeadlineService],
  exports: [NewsHeadlineService],
})
export class NewsHeadlineModule {}
