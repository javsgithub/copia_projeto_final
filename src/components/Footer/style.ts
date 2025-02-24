import styled from 'styled-components'
import { colors } from '../../styles'

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
`
