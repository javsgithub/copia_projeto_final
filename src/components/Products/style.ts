import styled from 'styled-components'
import { breakpoints, Container } from '../../styles'

export const ProductContainer = styled(Container)`
  display: grid;
  justify-items: center;
`

export const ProductsList = styled.ul`
  max-width: 100%;
  margin-top: 80px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 48px;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`
