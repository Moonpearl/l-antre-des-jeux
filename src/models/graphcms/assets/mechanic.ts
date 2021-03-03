import Asset from './asset';
import Product from './product';

export default interface Mechanic extends Asset {
  name: string;
  products?: Product[];
}
