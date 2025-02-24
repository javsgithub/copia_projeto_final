import { Logo } from '../Hero/style'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'
import { Disclaimer, FooterContainer, SocialMediaContainer } from './style'

const Footer = () => (
  <FooterContainer>
    <div>
      <Logo src={logo} alt="Logo E-food" />
      <SocialMediaContainer>
        <img src={instagram} alt="Instragram" />
        <img className="center" src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </SocialMediaContainer>
    </div>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos. A
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
)

export default Footer
