import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`

body {
  position: relative;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
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
`;
