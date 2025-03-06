import Loader from '../../Loader'
import { Container } from '../../styles'
import * as S from './style'

const Banner = ({ banner }: BannerProps) => {
  if (!banner) {
    return <Loader />
  }

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
