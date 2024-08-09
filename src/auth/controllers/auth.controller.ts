import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { AuthGuard } from '../guard/auth.guard';
import { Public } from '../decorators/auth.decorator';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
   
  @Public()
  @Post('/login')
    async Login(@Body() loginDto:LoginDto){
      return this.authService.Login(loginDto);
    }


}
