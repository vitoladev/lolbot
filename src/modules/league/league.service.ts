import { League } from './league.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LeagueService extends BaseService<League> {
  constructor(
    @InjectRepository(League)
    private leagueRepository: Repository<League>,
  ) {
    super(leagueRepository);
  }
}
