import{
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    Max,
    MaxLength,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MaxLength(50)
    sku: string;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    price: number;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    lowStockThreshold?: number;

}
