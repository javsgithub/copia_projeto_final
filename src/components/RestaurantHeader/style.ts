import { Link } from 'react-router-dom'
import styled from 'styled-components'

import vector from '../../assets/images/vector.png'

import { breakpoints, colors, Container } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px 0 64px;
  background-image: url(${vector});

  @media (max-width: ${breakpoints.tablet}) {
  padding: 40px 0 40px;
  }

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.pink3};
    font-size: 16px;
    font-weight: 900;

    p {
      cursor: pointer;
      }
    }

    .basket {
    width: 21px;
    }
  }
`

export const Logo = styled.img`
  height: 58px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
  }
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${colors.pink3};
`
