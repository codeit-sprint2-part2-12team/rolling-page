import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
 font-size: 62.5%;
 font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 1248px) {
  main{
    padding: 0 2.4rem;
  }
}



`;

export default GlobalStyle;
