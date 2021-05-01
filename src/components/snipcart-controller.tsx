import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FC, useContext, useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { ThemeContext } from '../contexts/theme';
import { useSnipcartItemAdded } from '../hooks';
import { SnipcartProductItem } from '../models/snipcart';
import { Button } from './styles';

// SECTION Styles
// const styles = {
//   Container: styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 10000;
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     align-items: center;
//     transition: opacity 0.3s ease;
//     &.hidden {
//       opacity: 0;
//       pointer-events: none;
//     }
//   `,
//   Modal: styled.div`
//     max-width: 480px;
//     background-color: white;
//     padding: 1em;
//     border-radius: 1em;
//     display: flex;
//     flex-flow: column nowrap;
//     align-items: center;
//     gap: 1em;
//     text-align: justify;
//     -webkit-box-shadow: 0px 10px 25px -7px rgba(0, 0, 0, 0.5), 5px 5px 15px 5px rgba(0, 0, 0, 0);
//     box-shadow: 0px 10px 25px -7px rgba(0, 0, 0, 0.5), 5px 5px 15px 5px rgba(0, 0, 0, 0);
//   `,
//   FlexContainer: styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 1em;
//   `,
//   ProductImage: styled.img`
//     width: 4em;
//   `,
//   Alert: styled.div`
//     background-color: #fff0c0;
//     border: 1px solid #d8a601;
//     color: 1px solid #503d00;
//     border-radius: 0.25em;
//     font-size: 0.9em;
//     padding: 0.5em 1em;
//     & > strong {
//       font-weight: bold;
//     }
//   `,
// };
// !SECTION

// SECTION Main component
const SnipcartController: FC = () => {
  // ANCHOR Hooks
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [dontShowAgain, setDontShowAgain] = useState(false);
  // const [productItem, setProductItem] = useState<SnipcartProductItem>();
  // const { palette } = useContext(ThemeContext);

  // useSnipcartItemAdded((data: SnipcartProductItem) => {
  //   setProductItem(data);
  // });

  // useEffect(() => {
  //   if (productItem) {
  //     if (!dontShowAgain) {
  //       setIsModalOpen(true);
  //     }
  //   }
  // }, [productItem]);

  // ANCHOR Template
  return (
    <div />
    // <styles.Container className={isModalOpen ? '' : 'hidden'}>
    //   {productItem && (
    //     <styles.Modal>
    //       <p>Vous avez ajouté le produit suivant à votre panier:</p>
    //       <styles.FlexContainer>
    //         <styles.ProductImage src={productItem.image} alt={productItem.name} />
    //         <div>{productItem.name}</div>
    //       </styles.FlexContainer>
    //       <styles.Alert>
    //         <strong>⚠️ Attention:</strong> L&apos;Antre des jeux n&apos;assure aucune livraison. Toute commande effectuée sur ce site doit
    //         être retirée directement <Link to="/about">en magasin</Link>.
    //       </styles.Alert>
    //       <styles.FlexContainer>
    //         <input
    //           id="snipcart-modal-no-diplay"
    //           type="checkbox"
    //           checked={dontShowAgain}
    //           onChange={(event): void => setDontShowAgain(event.target.checked)}
    //         />
    //         <label htmlFor="snipcart-modal-no-diplay">Ne plus afficher cet avertissement</label>
    //       </styles.FlexContainer>
    //       <Button palette={palette} onClick={(): void => setIsModalOpen(false)}>
    //         <FaThumbsUp />
    //         {` `}J&apos;ai compris
    //       </Button>
    //     </styles.Modal>
    //   )}
    // </styles.Container>
  );
};
// !SECTION

// ANCHOR Exports
export default SnipcartController;
