import Asset from './asset';
import Product from './product';

export default interface Selection extends Asset {
  name: string;
  description: string;
  products: Product[];
}
