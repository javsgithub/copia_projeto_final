import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  height: 24px;
  cursor: pointer;
  width: ${(props) => props.width};
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink2 : colors.pink3}};
  }
`
export const ButtonLink = styled(Link)<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  height: 24px;
  cursor: pointer;
  text-decoration: none;
  width: ${(props) => props.width};
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink2 : colors.pink3}};
  }
`
