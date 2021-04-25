import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class BaseService<T> {
  constructor(private repository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async getOne(id: number): Promise<T> {
    return await this.repository.findOne(id);
  }

  async create(data: T) {
    await this.repository.save(data);
  }

  async update(id: number, data: T) {
    await this.repository.update(id, data);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }

  async getRows() {
    return await this.repository.count();
  }
}
