import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Rye';
  font-style: normal;
  font-weight: 400;
  src: local('Rye'), url('/fonts/rye-v8-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Smokum';
  font-style: normal;
  font-weight: 400;
  src: local('Smokum'), url('/fonts/smokum-v11-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Smythe';
  font-style: normal;
  font-weight: 400;
  src: local('Smythe'), url('/fonts/smythe-v11-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Yrsa';
  font-style: normal;
  font-weight: 400;
  src: local('Yrsa'), url('/fonts/yrsa-v6-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Yrsa';
  font-style: normal;
  font-weight: 700;
  src: local('Yrsa'), url('/fonts/yrsa-v6-latin-700.woff2') format('woff2')
}
@font-face {
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 100;
  src: local('Bitter'), url('/fonts/bitter-v17-latin-100.woff2') format('woff2')
}
@font-face {
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 400;
  src: local('Bitter'), url('/fonts/bitter-v17-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 900;
  src: local('Bitter'), url('/fonts/bitter-v17-latin-900.woff2') format('woff2')
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${({
  theme: {
    typography: { body }
  }
}) => css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${body.family};
    font-size: ${body.size};
    font-weight: ${body.weight};
    line-height: ${body.lineHeight};
  }
`};

`

export default GlobalStyles
