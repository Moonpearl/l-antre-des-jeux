import styled from '@emotion/styled';
import { colors } from '../../styles/variables';

const Button = styled.button`
  position: relative;
  background-color: ${colors.ui.dark};
  background-image: linear-gradient(160deg, rgba(0, 0, 0, 0) 0%, ${colors.ui.normal} 100%);
  border-radius: 0.5em;
  color: white;
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  transition: background-color 0.3s ease, padding 0.3s ease;

  &:after {
    right: 0;
    position: absolute;
    opacity: 0;
    content: '❯';
    transition: opacity 0.3s ease, right 0.3s ease;
  }

  &:hover {
    background-color: ${colors.ui.normal};
    padding: 0.5em 1.5em 0.5em 0.5em;
  }

  &:hover:after {
    right: 0.5em;
    opacity: 1;
  }
`;

export default Button;
