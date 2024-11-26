import { IsString, IsInt, Min, Max, Length, IsNotEmpty } from 'class-validator';

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
