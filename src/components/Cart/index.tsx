import { Overlay } from '../Products/style'
import {
  CartContainer,
  CartItem,
  CartSidebar,
  EmptyCartMessage,
  Price
} from './style'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { handleCheckout, handleCart, exclude } from '../../store/reducers'
import { getTotalPrice } from '../../utils'
import { parseToBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(handleCart())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <CartSidebar>
        {items.length === 0 ? (
          <EmptyCartMessage>O seu carrinho está vazio.</EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt="Foto de uma pizza" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBRL(item.preco as number)}</p>
                  </div>
                  <button onClick={() => dispatch(exclude(item.id))}></button>
                </CartItem>
              ))}
            </ul>
            <Price>
              <span>Valor total</span>
              <span>{parseToBRL(getTotalPrice(items))}</span>
            </Price>
            <Button
              type="button"
              title="Clique para preencher os dados da entrega"
              size="big"
              width="344px"
              onClick={() => {
                dispatch(handleCheckout())
                dispatch(handleCart())
              }}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </CartSidebar>
    </CartContainer>
  )
}

export default Cart
