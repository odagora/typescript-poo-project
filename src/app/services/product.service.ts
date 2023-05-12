import { faker } from '@faker-js/faker';

import { Product } from './../models/product.model';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.number(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      image: faker.image.imageUrl()
    }
  }
  products.push(newProduct);
  return newProduct;
}


export const updateProduct = (id: Product['id'], changes: UpdateProductDto ): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

