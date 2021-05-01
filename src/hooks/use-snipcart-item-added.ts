import { useEffect } from 'react';
import { SnipcartProductItem } from '../models/snipcart';

export default (callback: (data: SnipcartProductItem) => void): void => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { Snipcart } = window;

      return Snipcart.events.on('item.adding', (data: SnipcartProductItem) => {
        callback(data);
      });
    }
  });
};
