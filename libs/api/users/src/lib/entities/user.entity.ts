import { User } from 'prisma-client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
