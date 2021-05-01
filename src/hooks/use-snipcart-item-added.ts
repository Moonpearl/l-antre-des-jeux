import { useEffect } from 'react';
import { SnipcartProductItem } from '../models/snipcart';

export default (callback: (data: SnipcartProductItem) => void): void => {
  useEffect(() => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    return Snipcart.events.on('item.adding', (data: SnipcartProductItem) => {
      callback(data);
    });
  });
};
