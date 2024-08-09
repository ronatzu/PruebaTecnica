import { IsString,IsNumber,IsOptional,IsNegative, IsEmail} from "class-validator";


export class UpdateUserDto  {
    @IsString()
    @IsOptional()
    name?:string;

    @IsString()
    @IsOptional()
    @IsEmail()
    email?:string;

    @IsNumber()
    @IsOptional()
    @IsNegative()
    age?:number;

    @IsString()
    @IsOptional()
    password?:string;
}
