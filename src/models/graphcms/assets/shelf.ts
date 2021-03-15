import GraphCmsColor from '../color';
import GraphcmsImage from '../image';
import Asset from './asset';
import Product from './product';

export default interface Shelf extends Asset {
  name: string;
  description: string;
  products?: Product[];
  backgroundImage: GraphcmsImage;
  backgroundColor: GraphCmsColor;
  titleColor: GraphCmsColor;
}
