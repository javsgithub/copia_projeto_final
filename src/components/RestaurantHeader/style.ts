import styled from 'styled-components'
import vector from '../../assets/images/vector.png'
import { colors, Container } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding: 40px 0 64px;
  background-image: url(${vector});

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.pink3};
    font-size: 18px;
    font-weight: 900;

    p {
      cursor: pointer;
    }
  }
`

export const Logo = styled.img`
  height: 58px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${colors.pink3};
`
