import { BaseController } from '../base/base.controller';
import { PersonService } from './person.service';
import { Controller } from '@nestjs/common';
import { Person } from 'src/modules/person/person.entity';

@Controller('person')
export class PersonController extends BaseController<Person> {
  constructor(private personService: PersonService) {
    super(personService);
  }
}
