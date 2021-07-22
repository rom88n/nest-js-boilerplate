// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserResolver } from '../resolvers/user.resolver';
import { UserService } from '../services/user.service';
import { DatabaseModule } from './database.module';
import { userProviders } from '../providers/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...userProviders],
})
export class UserModule {}
