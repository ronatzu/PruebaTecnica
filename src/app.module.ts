import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
      
    }
  ),UserModule, AuthModule,MongooseModule.forRoot(process.env.DATABASE_MONGO)],
  controllers: [],
  providers: [], 
})
export class AppModule {

}
