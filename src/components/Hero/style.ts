import styled from 'styled-components'
import vector from '../../assets/images/vector.png'
import { colors } from '../../styles'

export const HeroContainer = styled.div`
  padding: 40px 0 64px;
  height: 360px;
  background-image: url(${vector});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 58px;
  cursor: pointer;
`

export const Title = styled.p`
  color: ${colors.pink3};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  width: 542px;
  height: 84px;
`
