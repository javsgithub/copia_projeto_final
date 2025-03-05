import styled from 'styled-components'

import * as S from '../Cart/style'
import { colors } from '../../styles'

export const CheckoutContainer = styled(S.CartContainer)`
  form {
    z-index: 1;
  }

  &.is-active {
    display: flex;
  }
`

export const MessageContainer = styled(S.CartSidebar)``

export const ConfirmationMessage = styled.div`
  h3 {
    color: ${colors.pink2};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.pink2};
    margin-bottom: 24px;
  }
`
export const DeliveryContainer = styled(S.CartSidebar)`
  display: block;

  .invisible {
    display: none;
`

export const FormSidebar = styled.div`
  p {
    color: ${colors.pink2};
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-size: 14px;
    fontt-weight: 700;
    line-height: 16px;
    color: ${colors.pink2};
  }

  input {
    height: 32px;
    width: 100%;
    background-color: ${colors.pink2};
    border: 1px solid ${colors.pink2};
    padding: 0 8px;
    margin-top: 8px;

    &.error {
      border: 2px solid red;
    }
  }

  small {
    color: #000;
    font-size: 10px;
    margin-left: 1px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 16px;
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`

export const PaymentContainer = styled(S.CartSidebar)``
