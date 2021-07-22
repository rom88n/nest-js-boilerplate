import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserModule } from './user.module';
import { databaseProviders } from '../providers/database.providers';
import { DatabaseModule } from './database.module';
import { UserResolver } from '../resolvers/user.resolver';
import { userProviders } from '../providers/user.providers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    DatabaseModule,
    // ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGO_DB),
    // MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [
    AppController,
    // CatsController,
  ],
  providers: [
    AppService,
    // CatsService,
    UserService,
    UserResolver,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule {}
