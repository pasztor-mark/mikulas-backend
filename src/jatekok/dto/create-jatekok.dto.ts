import { IsString, Max, MaxLength, Min, MinLength } from "class-validator"

export class CreateJatekokDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  megnevezes: string

  anyag: "Wood" | "Metal" | "Plastic" | "Other"
  @Min(0)
  @Max(900)
  suly: number
}
