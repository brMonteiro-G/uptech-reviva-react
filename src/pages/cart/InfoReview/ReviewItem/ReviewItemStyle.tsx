import styled from 'styled-components';

export const ReviewItemTemplate = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  right: 3.2em;

  input {
    width: 25px;
  }

  button {
    background-color: $tertiary-color;
    border-radius: 4px;
    border: none;
    width: 20px;
  }

  button:hover {
    color: white;
    cursor: pointer;
  }
`;
