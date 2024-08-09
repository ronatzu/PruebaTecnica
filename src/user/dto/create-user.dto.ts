import { IsString,IsNumber,IsNotEmpty,IsNegative, IsEmail} from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()

    name:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNumber()
    @IsNotEmpty()
    @IsNegative()
    age:number;

    // @IsString()
    // @IsNotEmpty()
    // password:string;


}
