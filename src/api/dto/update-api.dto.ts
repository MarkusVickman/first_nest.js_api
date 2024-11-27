import { PartialType } from '@nestjs/mapped-types';
import { CreateApiDto } from './create-api.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

//En Dto för att kontrollera/validerar inmatningar med post och i en partial class för put
//Denna är viktig för att data som lagras är av correkt typ eller längd enligt specifikationen nedan
//Denna klass använde Class-validator och vilkoren används även för att hjälpa min felhantering.

//Ärver alla variabler och specifikationer från CreateApiDto med skillnaden att alla värden nu är valfria.
export class UpdateApiDto extends PartialType(CreateApiDto) {

    @IsOptional()
    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;
 }
