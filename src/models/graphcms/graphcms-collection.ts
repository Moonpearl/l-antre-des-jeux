import Asset from './assets/asset';

interface GraphcmsEdge<T extends Asset> {
  node: T;
}

export default interface GraphcmsCollection<T extends Asset> {
  edges: GraphcmsEdge<T>[];
}
