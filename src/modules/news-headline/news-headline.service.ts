/* eslint-disable @typescript-eslint/no-unused-vars */
import { PersonService } from './../person/person.service';
import { TeamService } from './../team/team.service';
import { LeagueService } from './../league/league.service';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsHeadline } from '../../common/entities/news-headline.entity';

@Injectable()
export class NewsHeadlineService extends BaseService {
  constructor(
    @InjectRepository(NewsHeadline)
    private newsHeadlineRepository: Repository<NewsHeadline>,
    private leagueService: LeagueService,
    private teamService: TeamService,
    private personService: PersonService,
  ) {
    super(newsHeadlineRepository);
  }

  async generateRandomHeadLine() {
    let randomHeadline = await this.getRandom();

    const persons = randomHeadline.match(/PESSOA/g);
    const leagues = randomHeadline.match(/LIGA/g);
    const teams = randomHeadline.match(/TIME/g);

    if (persons !== null) {
      for (const _ of persons) {
        const randomPerson = await this.personService.getRandom();
        randomHeadline = randomHeadline.replace('$PESSOA', randomPerson);
      }
    }

    if (leagues !== null) {
      for (const _ of leagues) {
        const randomLeague = await this.leagueService.getRandom();
        randomHeadline = randomHeadline.replace('$LIGA', randomLeague);
      }
    }

    if (teams !== null) {
      for (const _ of leagues) {
        const randomTeam = await this.teamService.getRandom();
        randomHeadline = randomHeadline.replace('$TIME', randomTeam);
      }
    }

    return randomHeadline;
  }
}
