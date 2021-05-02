import { AppBaseEntity } from './base.entity';
import { Injectable } from '@nestjs/common';
import generateRandom from 'src/utils/generateRandom';
import { Repository } from 'typeorm';

@Injectable()
export abstract class BaseService {
  constructor(private repository: Repository<AppBaseEntity>) {}

  async getAll(): Promise<AppBaseEntity[]> {
    return await this.repository.find();
  }

  async getOne(id: number): Promise<AppBaseEntity> {
    return await this.repository.findOne(id);
  }

  async create(data: AppBaseEntity) {
    await this.repository.save(data);
  }

  async update(id: number, data: AppBaseEntity) {
    await this.repository.update(id, data);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }

  async getRandom() {
    const rows = await this.repository.count();
    const randomNumber = generateRandom(rows);
    const randomEntity = await this.getOne(randomNumber);
    const { name } = randomEntity;
    return name;
  }
}
