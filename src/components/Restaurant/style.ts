import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantContainer = styled.li`
  width: 472px;
  height: 398px;
  background-color: ${colors.white};
  position: relative;
`

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 217px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  display: inline-block;
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const RateContainer = styled.div`
  height: 21px;
  width: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0 16px;
`

export const InfoTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Bottom = styled.div`
  width: 100%;
  height: 181px;
  padding: 8px;
  background-color: ${colors.white};
  color: ${colors.pink3};
  border: 1px solid ${colors.pink3};
  border-top: 0;
  }
`
