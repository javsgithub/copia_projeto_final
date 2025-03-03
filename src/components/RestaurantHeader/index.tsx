import { useDispatch, useSelector } from 'react-redux'

import { handleCart } from '../../store/reducers'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

import { Container } from '../../styles'
import * as S from './style'

const RestaurantHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(handleCart())
  }
  return (
    <S.HeaderContainer>
      <Container>
        <S.ButtonLink to={'/'}>Restaurantes</S.ButtonLink>
        <S.ButtonLink to={'/'}>
          <S.Logo src={logo} />
        </S.ButtonLink>
        <p role="button" onClick={openCart}>
          <span>{items.length}</span>&nbsp;produtos(s){' '}
          <img className="basket" src={cart} alt="Carrinho de compras" />
        </p>
      </Container>
    </S.HeaderContainer>
  )
}

export default RestaurantHeader
