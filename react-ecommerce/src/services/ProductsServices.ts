import { AxiosService } from "./AxiosServices";


export class ProductsServices {
  private http: AxiosService;

  constructor() {
    this.http = new AxiosService()
  }

  async getProducts() {
    try {
      const products = await this.http.get({
        url: '/v1/product',
      })
  
      return products.data
    } catch (error) {
      return null
    }
  }

  async registerProduct(name, description, saleValue) {
    try {
      await this.http.post({
        url: '/v1/product',
        body: {
          name, 
          description, 
          saleValue
        }
      })

      return 'success'
    } catch (error) {
      return null
    }
  }

  async getProductById(id) {
    try {
      const products = await this.http.get({
        url: '/v1/product/'+id,
      })

      return products.data
    } catch (error) {
      return null
    }
  }

  async deleteProductById(id) {
    try {
      await this.http.delete({
        url: '/v1/product/'+id,
      })

      return 'success'
    } catch (error) {
      return null
    }
  }

}
