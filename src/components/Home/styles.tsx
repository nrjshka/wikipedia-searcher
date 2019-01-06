import styled from 'styled-components';
import { Container } from '../../styles';

export const HomeStyles = styled(Container)`
`;

export const Header = styled.div`
  height: 100px;
`;

export const Input = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  
  label:before {
    content: '';
    display: none;
    position: absolute;
    left: 5px;
    top: 2px;
    width: 1px;
    height: 14px;
    background: #000;
    opacity: 1;
    z-index: 3;
  }

  input:not(:focus) + label:before {
    display: inline-block;
    animation: cursor 1s infinite step-end;
  }

  @keyframes cursor {
    50% { background: transparent; }
  }
`;
