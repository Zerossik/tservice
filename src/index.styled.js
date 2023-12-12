import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`

body {
  position: relative;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.color.bg};
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
p,
input,
button {
  margin: 0;
  padding: 0;
}

address {
  font-style: normal;
}


input:-webkit-autofill {
  -webkit-box-shadow: inset 0 0 0 50px ${({ theme }) =>
    theme.color.bgSecondary}; /* колір вашого фону */
  -webkit-text-fill-color: ${({ theme }) =>
    theme.font.primary}; /* колір тексту */
}

ul {
  list-style: none;
}

a {
  font-style: normal;
  text-decoration: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  user-select: none;
  border: none;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

// z-indexes in this project
// 100 - spinner
// 90 - modal
// 80 - dropDown

// export const Label = styled.label.attrs({
//   className: "visually-hidden",
// })``;
