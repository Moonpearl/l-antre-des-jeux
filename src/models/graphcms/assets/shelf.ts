import Asset from './asset';
import Product from './product';

export default interface Shelf extends Asset {
  name: string;
  description: string;
  products: Product[];
  backgroundImage: {
    url: string;
  };
  color: {
    css?: string;
    hex?: string;
    rgba?: {
      a: number;
      b: number;
      g: number;
      r: number;
    };
  };
}
