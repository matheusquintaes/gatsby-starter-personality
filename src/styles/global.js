import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, 
      BlinkMacSystemFont, 
      "Segoe UI", 
      Roboto, 
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue", 
      sans-serif;
    font-size: 1.4rem;
    color:  var(--text);
  }
  a {
    color: var(--text);
    text-decoration: underline;
    transition: opacity 0.5s;
    &:hover {
      color: var(--highlight);
      text-decoration:none;
    }
  }
  h1 {
    margin-bottom: 2rem;
  }
  
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body {
    --textColor: #1D2B3D;
    --textSecondColor: #858d95;
    --mainColor: #5A67D8;
    --gray1: #f7fafc;
    --gray2: #edf2f7;
    --gray3: #e2e8f0;
    --gray4: #cbd5e0;
    --gray5: #a0aec0;
    --gray6: #718096;
    --gray7: #4a5568;
    --gray8: #2d3748;
    --gray9: #1a202c;
    --gray10: #1D2B3D;
    --bg-black: #000;
    --bg-white: #fff;
  }
`

export default GlobalStyles