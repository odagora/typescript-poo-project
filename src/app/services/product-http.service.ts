import axios from "axios";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {
  constructor(
    private url = 'https://api.escuelajs.co/api/v1/products'
  ){}

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url)
    return data
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.url, dto)
    return data
  }
  async update(id: number, changes: UpdateProductDto){
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes)
    return data
  }
  async findOne(id: number){
    const { data } = await axios.get<Product | undefined>(`${this.url}/${id}`)
    return data
  }
}
