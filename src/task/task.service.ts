import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private TASKS = [
    {
      id: 0,
      name: 'record a video',
      isdone: false
    }
  ];

  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length,
      name: dto.name,
      isdone: false
    });

    return this.TASKS;
  }

  toggleDone(id: string) {
    const task = this.TASKS.find((task) => task.id === +id);
    task.isdone = !task.isdone;
    return task;
  }
}
