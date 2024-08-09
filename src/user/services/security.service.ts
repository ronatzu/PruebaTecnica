import {  Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityService {

  constructor() {}


  async encryptPassword(email:string):Promise<string> {

    return await bcrypt.hash(email,10);       
  }

  async validPassword(password:string, hash:string) :Promise<Boolean>{
    return  await bcrypt.compare(password, hash);
    
  }
  
}
