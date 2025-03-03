import styled from 'styled-components'

import vector from '../../assets/images/vector.png'

import { breakpoints, colors, Container } from '../../styles'

export const HeroContainer = styled.div`
  padding: 40px 0 64px;
  height: 360px;
  background-image: url(${vector});
  width: 100%;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 260px;
`

export const Logo = styled.img`
  height: 58px;
  cursor: pointer;
`

export const Title = styled.p`
  color: ${colors.pink3};
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  width: 542px;
  height: 84px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    width: 100%;
    line-height: 32px;
    margin: 0;
    height: 42px;
  }
`
