import { useEffect } from 'react';
import { SnipcartProductItem } from '../models/snipcart';

export default (callback: (data: SnipcartProductItem) => void): void => {
  const Snipcart = typeof window !== `undefined` ? window.Snipcart : null;

  useEffect(() => {
    return Snipcart.events.on('item.adding', (data: SnipcartProductItem) => {
      callback(data);
    });
  }, [Snipcart]);
};
