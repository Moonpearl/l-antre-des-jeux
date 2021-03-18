import Asset from './asset';
import GraphcmsImage from '../image';

export default interface Page extends Asset {
  title: string;
  description: string;
  openGraphImage: GraphcmsImage;
}
