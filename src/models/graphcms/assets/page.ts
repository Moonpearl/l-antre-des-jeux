import Asset from './asset';

export default interface Page extends Asset {
  title: string;
  description: string;
  openGraphImage: string;
}
