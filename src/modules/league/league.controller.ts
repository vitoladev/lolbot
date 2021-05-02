import { BaseController } from '../base/base.controller';
import { LeagueService } from './league.service';
import { Controller } from '@nestjs/common';

@Controller('league')
export class LeagueController extends BaseController {
  constructor(private leagueService: LeagueService) {
    super(leagueService);
  }
}
