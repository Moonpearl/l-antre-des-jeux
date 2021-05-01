import { useEffect } from 'react';
import { SnipcartProductItem } from '../models/snipcart';

export default (callback: (data: SnipcartProductItem) => void): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let _window: any;

  if (typeof window !== `undefined`) {
    _window = window;
  } else {
    _window = {
      Snipcart: {
        events: {
          on: (): void => undefined,
        },
      },
    };
  }

  const { Snipcart } = _window;

  useEffect(() => {
    return Snipcart.events.on('item.adding', (data: SnipcartProductItem) => {
      callback(data);
    });
  });
};
