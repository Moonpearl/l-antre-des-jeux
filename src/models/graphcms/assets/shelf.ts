import Asset from './asset';
import Product from './product';

export default interface Shelf extends Asset {
  name: string;
  description: string;
  products: Product[];
  backgroundImage: {
    url: string;
  };
  backgroundColor: {
    css?: string;
    hex?: string;
    rgba?: {
      a: number;
      b: number;
      g: number;
      r: number;
    };
  };
  titleColor: {
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
