import Asset from './asset';

export default interface Article extends Asset {
  title: string;
  text: string;
}
