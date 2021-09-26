import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.light};
    color: ${(props) => props.theme.dark};
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h1{
    margin: 0px;
    padding: 0px;
  }

  a {
    color: ${(props) => props.theme.highLight};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
