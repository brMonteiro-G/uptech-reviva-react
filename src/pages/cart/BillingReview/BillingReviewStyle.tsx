import styled from 'styled-components';
import { font_weight_text, tertiary_color } from 'Variables';

export const ReviewPayment = styled.div`
  width: 100%;
  button {
    display: block;
    margin: auto;
    margin-top: 159%;
    border: none;
    height: 3em;
    background-color: $tertiary-color;
  }

  button:hover {
    color: white;
    cursor: pointer;
  }
`;

export const ReviewPaymentConfig = styled.div`
  height: 100%;
  padding: 11%;
  padding-top: 0;
  font-weight: ${font_weight_text};
  background-color: ${tertiary_color};
`;
