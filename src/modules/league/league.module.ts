import { LeagueService } from './league.service';
import { League } from './league.entity';
import { LeagueController } from './league.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class LeagueModule {}
