import styled from 'styled-components';
import { tertiary_color } from 'Variables';


export const DivBackgroundBag = styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 42px;
justify-content: center;
width: 285px;
border-radius: 1%;
margin-top: 6em;

img {

  justify-self: center;
  align-self: center;
  padding: 0 2% 2% 0;
}

p {
  align-self: center;
  justify-self: flex-end;
}

`;

export const CartButton = styled.button`
background-color: ${tertiary_color};
border: none;
font-size: 15px;
color: white;

&:hover {
    cursor: pointer;
    color: white;
}

`;

export const ShoppingCartButton = styled.button`
background-image: url(\"../../../../public/images/shopping-bag.png\");
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;




