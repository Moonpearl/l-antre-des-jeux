import css, { SerializedStyles } from '@emotion/css';
import styled from '@emotion/styled';
import { WithPaletteProps } from '../../models';

interface ButtonProps extends WithPaletteProps {
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: ${({ palette }): string => palette.titleColor.css};
  background-image: linear-gradient(160deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  background-blend-mode: color-burn;
  border-radius: 0.5em;
  color: white;
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  transition: background-color 0.3s ease, padding 0.3s ease;

  ${({ disabled, palette }): SerializedStyles => {
    if (disabled) {
      return css`
        cursor: not-allowed;
      `;
    } else {
      return css`
        &:after {
          right: 0;
          position: absolute;
          opacity: 0;
          content: '❯';
          transition: opacity 0.3s ease, right 0.3s ease;
        }

        &:hover {
          background-color: ${palette.titleHighlightColor.css};
          padding: 0.5em 1.5em 0.5em 0.5em;
        }

        &:hover:after {
          right: 0.5em;
          opacity: 1;
        }
      `;
    }
  }}
`;

export default Button;
