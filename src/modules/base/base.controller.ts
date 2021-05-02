import { AppBaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';

export abstract class BaseController {
  constructor(private baseService: BaseService) {}

  @Get()
  async getAll() {
    return this.baseService.getAll();
  }

  @Get(':id')
  async getOne(@Param() { id }) {
    return this.baseService.getOne(id);
  }

  @Post()
  async create(@Body() entity: AppBaseEntity) {
    return this.baseService.create(entity);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() entity: AppBaseEntity) {
    return this.baseService.update(id, entity);
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    return this.baseService.delete(id);
  }
}
