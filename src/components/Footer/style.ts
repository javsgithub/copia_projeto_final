import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const FooterContainer = styled.ul`
  height: 298px;
  background-color: ${colors.pink2};
  padding: 40px 0 40px;
  margin-top: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 16px 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 16px 16px;
    height: 260px;
  }
`

export const SocialMediaContainer = styled.ul`
  width: 88px;
  height: 24px;
  margin: 32px auto 0px;
  text-align: center;

  img {
    height: 24px;
    cursor: pointer;
  }

  .center {
    margin: 0 8px;
  }
`

export const Disclaimer = styled.p`
  width: 480px;
  height: 24px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-height: 12px;
  display: inline-block;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
