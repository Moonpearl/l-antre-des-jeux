import React, { FC } from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const ShelfPage: FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div className="ShelfContainerIconsHome">
          <div>Icone home</div>
          <div>Icone home2</div>
        </div>

        <div className="LeftSide">
          <p>Nombre de produits dans ce rayon: 150</p>
          <div>Barre multicritères ou image</div>
        </div>

        <div className="RightSide--ShelfContainer">
          <h1>Nom du rayon</h1>
          <div className="ProductContainer">
            <img className="ProductImg"></img>
            <h2>Titre du produit</h2>
            <div>Panier</div>
          </div>
          <ul className="ShelfPages">
            <ul>arrow</ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <ul>arrow</ul>
          </ul>
        </div>
        <div>Composant barre de recherche</div>
      </Container>
    </Page>
  </IndexLayout>
);

export default ShelfPage;
