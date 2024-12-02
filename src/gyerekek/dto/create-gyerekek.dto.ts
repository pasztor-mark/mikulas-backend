import { IsString, MaxLength, Min, MinLength } from "class-validator"

export class CreateGyerekekDto {
  @IsString()
  @MinLength(2)
  @MaxLength(54)
 nev: string
 @IsString()
 pontosCim: string
 jo: boolean 
}
