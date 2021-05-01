import { BaseController } from '../base/base.controller';
import { TeamService } from './team.service';
import { Controller } from '@nestjs/common';
import { Team } from './team.entity';

@Controller('team')
export class TeamController extends BaseController<Team> {
  constructor(private teamService: TeamService) {
    super(teamService);
  }
}
