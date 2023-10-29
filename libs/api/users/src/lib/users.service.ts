import {Body, Injectable, Param} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from "@multilist/prisma-client";

@Injectable()
export class UsersService {
  constructor(protected prisma: PrismaService) {
  }


  create(data: CreateUserDto) {
    return this.prisma.user.create({data});
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({where: {id}});
  }

  update(id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({where: {id}, data: updateUserDto});
  }

  remove(id: string) {
    return this.prisma.user.delete({where: {id}});
  }

}
