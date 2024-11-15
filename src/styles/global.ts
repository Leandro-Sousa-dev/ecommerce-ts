import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }


body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

ol, ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;

export const Container = styled.div`
  width: 100%;

  max-width: 1250px;

  margin: 0 auto;

  padding-left: 32px;
  padding-right: 32px;
`;

export const Screen = styled.div`
  background: #111111;
`;
