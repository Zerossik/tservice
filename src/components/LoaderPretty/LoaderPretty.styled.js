import styled, { keyframes } from "styled-components";

const spinColor = "#0f0";

const animate = keyframes`
  0% {
    background-color: ${spinColor};
    box-shadow: 0 0 5px ${spinColor}, 
    0 0 15px ${spinColor}, 
    0 0 30px ${spinColor},
    0 0 50px ${spinColor};
    rotate: 0deg;
  }
 20% {
    background-color: ${spinColor};
    box-shadow: 0 0 5px ${spinColor},
    0 0 15px ${spinColor},
    0 0 30px ${spinColor},
    0 0 50px ${spinColor};
    rotate: 0deg;
  }
   40% {
    background-color: ${spinColor};
    box-shadow: 0 0 5px ${spinColor},
    0 0 15px ${spinColor},
    0 0 30px ${spinColor},
    0 0 50px ${spinColor};
    rotate: 90deg;
    transform-origin: bottom;
    filter: hue-rotate(0deg);
  }
     80% {
    background-color: ${spinColor};
    box-shadow: 0 0 5px ${spinColor},
    0 0 15px ${spinColor},
    0 0 30px ${spinColor},
    0 0 50px ${spinColor};
    rotate: 90deg;
    transform-origin: bottom;
    filter: hue-rotate(360deg);
  }
    90% {
    background-color: #000;
    box-shadow: none;
    rotate: 0deg;
  }
      90.1%, 100% {
    background-color: #000;
    box-shadow: none;
    rotate: 0deg;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backDrop};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
`;

export const SpanStyle = styled.span`
  position: relative;
  width: 5px;
  height: 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    animation: ${animate} 6s linear infinite;
    animation-delay: calc(${({ $time }) => $time} * 0.1s);
  }
`;
