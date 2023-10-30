import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {UserEntity} from "./entities/user.entity";

const USER_TAG = 'Users';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiTags(USER_TAG)
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @ApiTags(USER_TAG)
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiTags(USER_TAG)
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id') id: string): Promise<UserEntity | null> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiTags(USER_TAG)
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiTags(USER_TAG)
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.remove(id);
  }
}
