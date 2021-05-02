import { BaseController } from '../base/base.controller';
import { PersonService } from './person.service';
import { Controller } from '@nestjs/common';

@Controller('person')
export class PersonController extends BaseController {
  constructor(private personService: PersonService) {
    super(personService);
  }
}
