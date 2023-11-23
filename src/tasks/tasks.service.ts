import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { TaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(private db: DbService) {}
  async getAll() {
    return this.db.task.findMany();
  }

  async create(dto: TaskDto) {
    return await this.db.task.create({
      data: dto
    });
  }

  async getByid(id: string) {
    const task = await this.db.task.findUnique({
      where: {
        id: +id
      }
    });
    return task;
  }

  async toggle(id: string) {
    const task = await this.getByid(id);
    return this.db.task.update({
      data: {
        isDone: !task.isDone
      },
      where: {
        id: +id
      }
    });
  }

  async removeById(id: string) {
    return this.db.task.delete({
      where: {
        id: +id
      }
    });
  }
}
