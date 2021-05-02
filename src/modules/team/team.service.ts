import { Team } from '../../common/entities/team.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService extends BaseService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {
    super(teamRepository);
  }
}
