import { IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/auth/enums/roles.enum";

export class CreateUserDTO {
    @ApiProperty()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    role: Role.User;
}