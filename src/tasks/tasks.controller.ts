import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  GetTasks() {
    return this.tasksService.getAll();
  }

  @Post()
  AddTask(@Body() dto: TaskDto) {
    return this.tasksService.create(dto);
  }

  @Patch(':id')
  ToggleTask(@Param('id') id: string) {
    return this.tasksService.toggle(id);
  }

  @Delete(':id')
  RemoveTask(@Param('id') id: string) {
    return this.tasksService.removeById(id);
  }
}
