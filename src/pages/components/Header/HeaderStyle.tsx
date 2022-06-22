import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { quaternary_color } from 'Variables';

export const HeaderTemplate = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${quaternary_color};
  align-items: center;
  box-sizing: border-box;
  padding: 2%;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const HeaderLinkButton = styled(Link)`
  background-image: url('../../../../public/images/shopping-bag\ \(1\).png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  color: transparent;
  width: 32px;
  height: 32px;
  display: block;

  &:hover {
    border: solid 1px #ffffff;
    border-radius: 100%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
    transition: 1s all;
    transform: scale(1.2);
  }
`;
