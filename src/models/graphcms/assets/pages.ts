import Asset from './asset';

export default interface Pages extends Asset {
  title: string;
  description: string;
  openGraphImage: string;
}
