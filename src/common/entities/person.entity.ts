import { Entity } from 'typeorm';
import { AppBaseEntity } from '../../modules/base/base.entity';

@Entity()
export class Person extends AppBaseEntity {}
