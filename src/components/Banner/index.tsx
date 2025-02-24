import { FoodPlace } from '../../pages/Home'
import { Container } from '../../styles'
import { Category, Image, RestaurantName } from './style'

export type Props = {
  banner: FoodPlace
}

const Banner = ({ banner }: Props) => {
  return (
    <Image banner={banner}>
      <Container>
        <Category>{banner.tipo}</Category>
        <RestaurantName>{banner.titulo}</RestaurantName>
      </Container>
    </Image>
  )
}

export default Banner
