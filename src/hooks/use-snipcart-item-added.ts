import { useEffect } from 'react';
import { SnipcartProductItem } from '../models/snipcart';

export default (callback: (data: SnipcartProductItem) => void): void => {
  // export default (): void => {
  const { Snipcart } = window;

  useEffect(() => {
    return Snipcart.events.on('item.adding', (data: SnipcartProductItem) => {
      callback(data);
    });
  }, [Snipcart]);
};
