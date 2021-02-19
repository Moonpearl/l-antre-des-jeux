import Product from './product';

export default interface Shelf {
  name: string;
  slug: string;
  description: string;
  products: Product[];
};
