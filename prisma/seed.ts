import {faker} from '@faker-js/faker'
import {PrismaClient} from '@prisma/client'
import {CreateGyerekekDto} from '../src/gyerekek/dto/create-gyerekek.dto'
import {CreateJatekokDto} from '../src/jatekok/dto/create-jatekok.dto'
const prisma = new PrismaClient()
const main = async () => {
  const alapanyagok = ["Metal", "Plastic", "Wood", "Other"]
  for (let i = 0; i < 15; i++) {
    const gyerekDto: CreateGyerekekDto = {
      nev: faker.person.fullName(),
      jo: faker.datatype.boolean(),
      pontosCim: faker.location.streetAddress()
    }
    const jatekDto: CreateJatekokDto = {
      anyag: Object.keys[alapanyagok[Math.floor(Math.random()*alapanyagok.length)]],
      megnevezes: faker.commerce.productName(),
      suly: Math.floor(Math.random()*899)
    }
    await prisma.gyerek.create({
      data: gyerekDto
    })
    await prisma.jatek.create({
      data: jatekDto
    })
    
  }
}
main()
