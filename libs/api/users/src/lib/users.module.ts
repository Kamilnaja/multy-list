import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClientModule } from '@multilist/prisma-client';

@Module({
  imports: [PrismaClientModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
