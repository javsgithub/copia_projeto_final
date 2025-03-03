import logo from '../../assets/images/logo.png'

import { Container } from '../../styles'

import * as S from './style'

const Hero = () => (
  <S.HeroContainer>
    <Container>
      <S.Logo src={logo} alt="Logo E-food" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </Container>
  </S.HeroContainer>
)

export default Hero
