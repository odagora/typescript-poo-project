import { UpdateProductDto } from "../dtos/product.dto"
import { Product } from "../models/product.model"
import { ProductHttp2Service } from "./product-http2.service"

export class ProductCRUDService {
  protected url = 'https://api.escuelajs.co/api/v1/products'
  private http = new ProductHttp2Service(this.url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto)
  }

  async newFunction() {
    return this.http.newRequest()
  }
}
