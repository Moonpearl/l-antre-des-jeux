import Asset from './asset';
import Product from './product';

export default interface ProductVariant extends Asset {
  name: string;
  priceModifier: number;
  product: Product;
}
