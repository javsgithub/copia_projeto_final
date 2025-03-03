import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  pink1: '#FFF8F2',
  pink2: '#FFEBD9',
  pink3: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

    body {
    background-color: ${colors.pink1};
    color: ${colors.pink3};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }
`
