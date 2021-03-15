import TypeName from './type-name';

export default interface GraphCmsColor {
  rgba: {
    a: number;
    g: number;
    b: number;
    r: number;
    remoteTypeName: TypeName;
  };
  css: string;
  hex: string;
  remoteTypeName: TypeName;
}
