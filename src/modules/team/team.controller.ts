import { BaseController } from '../base/base.controller';
import { TeamService } from './team.service';
import { Controller } from '@nestjs/common';

@Controller('team')
export class TeamController extends BaseController {
  constructor(private teamService: TeamService) {
    super(teamService);
  }
}
