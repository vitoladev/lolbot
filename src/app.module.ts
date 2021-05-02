import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './modules/person/person.module';
import { LeagueModule } from './modules/league/league.module';
import { TeamModule } from './modules/team/team.module';
import { NewsHeadlineModule } from './modules/news-headline/news-headline.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/common/entities/*.entity{.ts,.js}'],
      }),
    }),
    PersonModule,
    NewsHeadlineModule,
    LeagueModule,
    TeamModule,
  ],
})
export class AppModule {}
