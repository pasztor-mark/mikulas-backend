import { Injectable } from '@nestjs/common';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekokService {
  db: PrismaService
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createJatekokDto: CreateJatekokDto) {
    await this.db.jatek.create({
      data: createJatekokDto
    })
  }

  async findAll() {
    const query = await this.db.jatek.findMany()
    return query
  }
  
  async findOne(id: number) {
    const query = await this.db.jatek.findFirst({
      where: {
        id
      }
    })
    return query
  }

  async update(id: number, updateJatekokDto: UpdateJatekokDto) {
    return await this.db.jatek.update({
      where: {
        id
      },
      data: updateJatekokDto
    })
    
  }

  async remove(id: number) {
    await this.db.jatek.delete({
      where: {
        id
      }
    })
    return `#${id} játék törölve`
  }
}
