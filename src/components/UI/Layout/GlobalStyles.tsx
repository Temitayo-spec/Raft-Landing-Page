import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #070606;
    --white: #fff;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --green: #2b892e;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
