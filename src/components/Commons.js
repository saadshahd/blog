import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'fontello';
  src: url('./font/fontello.eot?88483219');
  src: url('./font/fontello.eot?88483219#iefix') format('embedded-opentype'),
       url('./font/fontello.woff2?88483219') format('woff2'),
       url('./font/fontello.woff?88483219') format('woff'),
       url('./font/fontello.ttf?88483219') format('truetype'),
       url('./font/fontello.svg?88483219#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}


 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 2em;
  font-size: 0.7em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-facebook:before { content: '\f230'; }
.icon-github:before { content: '\f308'; }
.icon-twitter:before { content: '\f309'; }
.icon-linkedin:before { content: '\f30c'; }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

html {
  direction: rtl;
  font-size: 180%;
}

body {
  font-family: 'Jomhuria', cursive;
  color: rgba(0, 0, 0, 0.75);
  background-color: #e8e8e8;
}

p {
  font-family: Lateef, cursive;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: rgba(34,34,34,0.8);
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
`
export const StyledLink = styled(Link)`
  border-bottom: 1px dotted rgba(162, 162, 162, 0.8);

  &:hover {
    border-bottom-style: solid;
  }
`

export const Text = styled.p`
  line-height: 1.2;
  margin: 1em 0 0 0;
`
