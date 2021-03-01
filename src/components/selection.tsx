import React, { FC } from 'react';
import { GraphcmsSelection } from '../models/graphcms/assets';

interface SelectionProps {
  selection: GraphcmsSelection;
}

const Selection: FC<SelectionProps> = ({ selection }) => (
  <div>
    <h3>{selection.name}</h3>
    <ol>
      {selection.products.map(product => (
        <li key={product.slug}>{product.name}</li>
      ))}
    </ol>
  </div>
);

export default Selection;
