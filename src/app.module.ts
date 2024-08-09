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
  ),UserModule, AuthModule,MongooseModule.forRoot('mongodb+srv://ronarost:ContraseñaPruebaTecnica@crud-pt.l1bc5.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-PT')],
  controllers: [],
  providers: [], 
})
export class AppModule {

}
