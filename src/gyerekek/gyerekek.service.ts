import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekekService {
  db: PrismaService
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createGyerekekDto: CreateGyerekekDto) {
    await this.db.gyerek.create({
      data: createGyerekekDto
    })
    return 'Új gyerek felvéve a listába'
  }

  async findAll() {
    const query = await this.db.gyerek.findMany({
      include: {
        jatekok: true
      }
    })
    return query
  }

  async findOne(id: number) {
    const query = await this.db.gyerek.findFirst({
      where: {
        id
      }
    })
    return query
  }
  async addToyToChild(childID: number, toyID: number) {
    /*await this.db.gyerek.update({
      where: {
        id: childID
      },
      data: {
        jatekok: {
          connect: {
            jatekId_gyerekId: {
              gyerekId: childID,
              jatekId: toyID
            }
          }
        }
      }
    })*/
    await this.db.keresek.create({
      data: {

        gyerekId: childID,

        jatekId: toyID
      }
    })
    return "Hozzáadva"
  }
  async removeToyFromChild(childId: number, toyId: number) {
    try {
      await this.db.keresek.delete({
        where: {
          jatekId_gyerekId: {
            gyerekId: childId,
            jatekId: toyId
          }
        }
      })
    } catch(_err: unknown) {
      console.log(_err)
      throw new NotFoundException
    }
    return `#${childId} gyerektől törölve a #${toyId} játék.`
  }

  async update(id: number, updateGyerekekDto: UpdateGyerekekDto) {
    await this.db.gyerek.update({
      where: {
        id
      },
      data: updateGyerekekDto
    })
    return `#${id} gyerek frissítve`
  }

  async remove(id: number) {
    await this.db.gyerek.delete({
      where: {
        id
      }
    })
    return `Gyerek #${id} eltávolítva`
  }
}
