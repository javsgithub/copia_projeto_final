import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  margin-top: 80px;
  display: grid;
  gap: 48px 80px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 40px;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
