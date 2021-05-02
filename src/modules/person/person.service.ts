import { BaseService } from '../base/base.service';
import { Person } from '../../common/entities/person.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService extends BaseService {
  constructor(
    @InjectRepository(Person)
    private personService: Repository<Person>,
  ) {
    super(personService);
  }
}
