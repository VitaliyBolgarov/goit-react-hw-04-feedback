import styled from 'styled-components';
import { font } from '../Styles/minins';

export const Button = styled.button`
  padding: 6px;
  min-width: 40px;
  border-radius: 4px;
  ${font({ fs: 20, fw: 600, lh: 20 })};
  background-color: #ffffff;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primaryText};
  box-shadow: ${props => props.theme.colors.boxShadow};
  transition: all 250ms ease-in-out;
  ::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
    
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 5px 5px ${props => props.theme.colors.grey};
  }
  &:active {
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.grey};
  }
`;
