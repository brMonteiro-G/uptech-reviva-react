import styled from 'styled-components';
import { tertiary_color } from 'Variables';

export const SearchBarTemplate = styled.fieldset`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  width: 96%;
  @media screen and (max-width: 554px) {
    display: block;
    text-align: center;
  }
`;

export const SearchBarButton = styled.button`
  background-image: url('../../../../public/images/shopping-bag.png');
  background-color: ${tertiary_color};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 55px;
  width: 8%;
  height: 3em;
  border: none;

  &:hover {
    transition: 0.5s all ease-in;
    transform: scale(1.1);
  }
  @media screen and (max-width: 554px) {
    width: 50%;
  }
`;

export const SearchBarInput = styled.input`
  width: 90%;
  height: 2em;
  &:placeholder {
    font-size: 1em;
  }
`;
