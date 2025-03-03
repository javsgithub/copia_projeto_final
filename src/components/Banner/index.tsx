import { Container } from '../../styles'
import * as S from './style'

const Banner = ({ banner }: BannerProps) => {
  return (
    <S.Image banner={banner}>
      <Container>
        <S.Category>{banner.tipo}</S.Category>
        <S.RestaurantName>{banner.titulo}</S.RestaurantName>
      </Container>
    </S.Image>
  )
}

export default Banner
