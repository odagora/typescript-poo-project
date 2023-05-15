import axios from "axios"
import { Product } from "../models/product.model"
import { Category } from "../models/category.model"
import { UpdateProductDto } from "../dtos/product.dto"

export class BaseHttpService<TypeClass> {
  constructor(
    private url: string
  ){}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }

  async findOne(id: number){
    const { data } = await axios.get<Product | undefined>(`${this.url}/${id}`)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO){
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
}

(async () => {
  try {
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Product>(url1)

    const product = await productService.getAll()
    console.log('Cantidad de productos ->', product.length)
    console.log('Producto original', product[0]);

    await productService.update<Product['id'], UpdateProductDto>(product[0].id, {
      title: 'Brand new title',
    })

    const updatedProduct = await productService.findOne(product[0].id)
    console.log('Producto modificado', updatedProduct);

    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const categoryService = new BaseHttpService<Category>(url2)
    const category = await categoryService.getAll()
    console.log('Cantidad de categorías ->', category.length)
  } catch (error) {
    console.log(error);
  }
})()
