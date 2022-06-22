import styled from 'styled-components';
import { tertiary_color } from 'Variables';

export const ReviewTemplate = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1%;

  &:first-child{
    width: 100%;
  }
`;

// export const InfoReview = styled.div`
//   width: 100%;
// `;

export const PaymentReview = styled.div`
  width: 20%;
  background-color: ${tertiary_color};
`;
 