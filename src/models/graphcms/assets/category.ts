import Asset from './asset';
import Product from './product';

export default interface Category extends Asset {
  name: string;
  products?: Product[];
}
