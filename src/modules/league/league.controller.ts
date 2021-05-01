import { BaseController } from '../base/base.controller';
import { LeagueService } from './league.service';
import { Controller } from '@nestjs/common';
import { League } from './league.entity';

@Controller('league')
export class LeagueController extends BaseController<League> {
  constructor(private leagueService: LeagueService) {
    super(leagueService);
  }
}
