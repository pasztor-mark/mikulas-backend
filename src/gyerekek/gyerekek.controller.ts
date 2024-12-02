import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Post()
  create(@Body() createGyerekekDto: CreateGyerekekDto) {
    return this.gyerekekService.create(createGyerekekDto);
  }
  @Put(':gyerekId/jatekok/:jatekId')
  addToyToChild(@Param('gyerekId') gyerekId: string, @Param('jatekId') jatekId: string) {
    return this.gyerekekService.addToyToChild(+gyerekId, +jatekId);
  }

  @Get()
  findAll() {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const gyerek = await this.gyerekekService.findOne(+id);
    
    if (!gyerek) {
      throw new NotFoundException
    }
    return gyerek
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGyerekekDto: UpdateGyerekekDto) {
    const gyerek = await this.gyerekekService.update(+id, updateGyerekekDto);
    if (!gyerek) {
      throw new NotFoundException
    }
    return gyerek
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const gyerek = await this.gyerekekService.remove(+id);
    if (!gyerek) {
      throw new NotFoundException
    }
    return gyerek
  }
}
