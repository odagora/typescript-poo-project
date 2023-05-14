import axios from "axios"
import { Product } from "../models/product.model"
import { Category } from "../models/category.model"

export class BaseHttpService<TypeClass> {
  constructor(
    private url: string
  ){}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }
}

const url1 = 'https://api.escuelajs.co/api/v1/products'
const productService = new BaseHttpService<Product>(url1)
productService.getAll().then(product => console.log('Cantidad de productos ->', product.length))

const url2 = 'https://api.escuelajs.co/api/v1/categories'
const categoryService = new BaseHttpService<Category>(url2)
categoryService.getAll().then(category => console.log('Cantidad de categorías ->', category.length))
