import { IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}