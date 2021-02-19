import Product from './product';

export default interface Selection {
  name: string;
  slug: string;
  description: string;
  products: Product[];
}
