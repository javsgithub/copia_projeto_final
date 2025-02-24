import { Container } from '../../styles'
import { ButtonLink, HeaderContainer, Logo } from './style'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { handleCart } from '../../store/reducers'
import { RootReducer } from '../../store'

const RestaurantHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(handleCart())
  }
  return (
    <HeaderContainer>
      <Container>
        <ButtonLink to={'/'}>Restaurantes</ButtonLink>
        <Logo src={logo} />
        <p onClick={openCart}>
          <span>{items.length}</span>&nbsp;produtos(s) no carrinho
        </p>
      </Container>
    </HeaderContainer>
  )
}

export default RestaurantHeader
