import { useDispatch, useSelector } from 'react-redux'

import { handleCart } from '../../store/reducers'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

import { breakpoints, Container } from '../../styles'
import * as S from './style'
import { useState, useEffect } from 'react'

const RestaurantHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const breakpoint = window.matchMedia(`(max-width: ${breakpoints.mobile})`)

    setIsMobile(breakpoint.matches)

    const listener = () => setIsMobile(breakpoint.matches)
    breakpoint.addEventListener('change', listener)
  }, [])

  const showCart = () => {
    if (isMobile) {
      return <img className="basket" src={cart} alt="Carrinho de compras" />
    } else {
      return 'no carrinho'
    }
  }

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
          <span>{items.length}</span>&nbsp;produtos(s){''} {showCart()}
        </p>
      </Container>
    </S.HeaderContainer>
  )
}

export default RestaurantHeader
