import styled from 'styled-components';
import { font } from '../Styles/minins';

export const List = styled.ul`
  padding: 20px;
  max-width: 320px;
  border-radius: 4px;
  ${font({ fs: 20, fw: 500, lh: 20 })};
  background-color: ${props => props.theme.colors.white};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primaryText};
  box-shadow: ${props => props.theme.colors.boxShadow};
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: nowrap;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;