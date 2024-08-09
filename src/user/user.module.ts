import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './schemas/user.schema';
import { SecurityService } from './services/security.service';


@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService,SecurityService],
  exports:[UserService,SecurityService],
})
export class UserModule {}
