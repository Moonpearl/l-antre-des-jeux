import Product from './product'

export default interface Shelf {
  name: string
  slug: string
  description: string
  products: Product[]
  backgroundImage: {
    url: string
  }
  color: {
    css?: string
    hex?: string
    rgba?: {
      a: number
      b: number
      g: number
      r: number
    }
  }
}
