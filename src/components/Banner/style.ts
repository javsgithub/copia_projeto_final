import styled from 'styled-components'

import { colors, Container } from '../../styles'

export const Image = styled.div<BannerProps>`
  background-image: url(${(Props) => Props.banner && Props.banner.capa});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
  padding: 24px 0;
  display: block;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
  }
`

export const Category = styled.p`
  font-size: 32px;
  line-height: 36px;
  color: ${colors.white};
  font-weight: 100;
`
export const RestaurantName = styled(Category)`
  font-weight: 900;
`
