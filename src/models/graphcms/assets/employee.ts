import GraphcmsImage from '../image';
import Asset from './asset';

export default interface Employee extends Asset {
  bio: string;
  name: string;
  picture: GraphcmsImage;
}
