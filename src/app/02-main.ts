import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService()

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'First product description',
  categoryId: 10,
  images: []
})

const products = productService.getAll()
console.log(products);

const product = products[0].id

productService.update(product, {
  title: 'New product 1 name',
  price: 30
})

const updatedProduct = productService.findOne(product)

console.log(updatedProduct);
