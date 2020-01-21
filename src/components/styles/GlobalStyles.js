import { createGlobalStyle } from 'styled-components';
import {
  baseFontSize,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  Solid,
  type,
} from '../index';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  width: 100%;
}

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
time, mark, audio, video, button {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}

body {
  font-size: ${baseFontSize};
  font-family: ${type.ROBOTO_MONO};
  line-height: 1.2;
  color: ${Solid.BLACK};
  background: ${Solid.DARK_WHITE};
}

h1 {
  font-size: ${h1FontSize};
}

h2 {
  font-size: ${h2FontSize};
}

h3 {
  font-size: ${h3FontSize};
}

h3 {
  font-size: ${h4FontSize};
}

#root > div:first-child {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

#root > div:first-child > div:nth-child(2) {
  flex: 1;
}

`;
