import styled from 'styled-components';
import { tertiary_color } from 'Variables';

export const Buttonconfig = styled.div`
  content: '';
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 3px;
`;

export const ButtonSizeNonChecked = styled(Buttonconfig)`
  input + label:before {
    border: none;
    cursor: pointer;
    border: 2px solid ${tertiary_color};
    background: url('../../../../public/images/p.png') no-repeat center;
    background-size: contain;
  }
`;

export const ButtonSizeChecked = styled(ButtonSizeNonChecked)`
  input:checked + label:before {
    background-color: rgba(${tertiary_color}, 0.5);
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;
export const ButtonSize = styled(ButtonSizeChecked)`
  width: 8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  right: 2.8em;
  border: none;

  label {
    color: transparent;
    font-size: 0.1px;
  }

  input {
    display: none;
  }
`;
