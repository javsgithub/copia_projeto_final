import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'

import { Logo } from '../Hero/style'
import { ButtonLink } from '../RestaurantHeader/style'
import * as S from './style'

const Footer = () => (
  <S.FooterContainer>
    <div>
      <ButtonLink to={'/'}>
        <Logo src={logo} alt="Logo E-food" />
      </ButtonLink>
      <S.SocialMediaContainer>
        <img src={instagram} alt="Instragram" />
        <img className="center" src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </S.SocialMediaContainer>
    </div>
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos. A
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Disclaimer>
  </S.FooterContainer>
)

export default Footer
