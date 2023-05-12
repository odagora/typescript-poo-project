import { Product } from "./models/product.model"

(async () => {

  async function getProducts() {
    const data = await fetch('https://api.escuelajs.co/api/v1/products')
    const res: Promise<Product[]> = data.json()
    return res
  }

  const products = await getProducts()
  console.log('getProducts() ->', products.map(item => `${item.id} - ${item.title}`));

})()
