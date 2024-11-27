import { IsString, IsInt, Min, Length, IsNotEmpty } from 'class-validator';

//En Dto för att kontrollera/validerar inmatningar med post och i en partial class för put
//Denna är viktig för att data som lagras är av correkt typ eller längd enligt specifikationen nedan
//Denna klass använde Class-validator och vilkoren används även för att hjälpa min felhantering.
export class CreateApiDto {

    @IsString()
    @Length(1, 500)
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    set: number;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    rep: number;

}
