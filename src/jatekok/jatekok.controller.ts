import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JatekokService } from './jatekok.service';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';

@Controller('jatekok')
export class JatekokController {
  constructor(private readonly jatekokService: JatekokService) {}

  @Post()
  create(@Body() createJatekokDto: CreateJatekokDto) {
    return this.jatekokService.create(createJatekokDto);
  }

  @Get()
  findAll() {
    return this.jatekokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jatekokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJatekokDto: UpdateJatekokDto) {
    return this.jatekokService.update(+id, updateJatekokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jatekokService.remove(+id);
  }
}
