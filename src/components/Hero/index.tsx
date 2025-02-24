import logo from '../../assets/images/logo.png'
import { HeroContainer, Logo, Title } from './style'

const Hero = () => (
  <HeroContainer>
    <Logo src={logo} alt="Logo E-food" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeroContainer>
)

export default Hero
