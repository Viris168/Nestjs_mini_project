import { IsString, MinLength } from "class-validator";

export class createTodoDto{

    @IsString()
    @MinLength(1)
    title: string;
}