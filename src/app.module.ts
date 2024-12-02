import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GyerekekModule } from './gyerekek/gyerekek.module';
import { PrismaService } from './prisma.service';
import { JatekokModule } from './jatekok/jatekok.module';

@Module({
  imports: [GyerekekModule, JatekokModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
