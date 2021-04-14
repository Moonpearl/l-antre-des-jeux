export default interface SnipcartCollection<T> {
  totalItems: number;
  offest: number;
  limit: number;
  items: T[];
}
