import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const ButtonContainer = styled.button<ButtonProps>`
  box-sizing: border-box;
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
export const ButtonLink = styled(Link)<ButtonProps>`
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
