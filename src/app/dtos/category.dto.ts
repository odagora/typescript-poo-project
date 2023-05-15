import { AccessType, Category } from "../models/category.model";
import { IsNotEmpty, IsUrl, Length, IsEnum, validateOrReject, IsOptional } from 'class-validator'

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;

  constructor(
    name: string,
    image: string,
    access?: AccessType
  ){
    this.name = name
    this.image = image
    this.access = access
  }
}

(async () => {
  try {
    const dto = new CreateCategoryDto('Dan', 'https://api.escuelajs.co/api/v1/products')
    await validateOrReject(dto)
  } catch (error) {
    console.log(error);
  }
})()
