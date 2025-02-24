import styled from 'styled-components'
import { colors } from '../../styles'
import { Title } from '../Product/style'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.pink3};
  padding: 32px;
  color: ${colors.pink2};
  font-size: 14px;
  display: flex;
  position: relative;
  z-index: 1;

  img {
    display: block;
    width: 280px;
    height: 280px;
  }

  ${Title} {
    margin-top: 0;
  }
`

export const ModalInfos = styled.div`
  margin-left: 24px;

  img {
    height: 16px;
    width: 16px;
    color: ${colors.pink1};
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 16px;
`
