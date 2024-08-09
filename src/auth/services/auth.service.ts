import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { SecurityService} from 'src/user/services/security.service';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly securityService:SecurityService,
        private readonly jwtService: JwtService
    ) {}

    async Login( {email, password}:LoginDto){
        const userFound= await this.userService.findUserToLogin(email);
       
        if (!userFound){
            throw new  BadRequestException(`The email ${email} is wrong or not register`);
        }      
       
        const passwordCheck=await this.securityService.validPassword(password,userFound.password);
        if(!passwordCheck){
            throw new BadRequestException()
        }

        const payload = { email:userFound.email};
        return {
            token: await this.jwtService.signAsync(payload),
          };

    }




}
