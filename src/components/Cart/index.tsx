import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { RootReducer } from '../../store'
import { handleCheckout, handleCart, exclude } from '../../store/reducers'
import { getTotalPrice } from '../../utils'
import { parseToBRL } from '../../utils'

import { Overlay } from '../Products/style'
import * as S from './style'

const Cart = () => {
  const { CartIsActive, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(handleCart())
  }

  return (
    <S.CartContainer className={CartIsActive ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.CartSidebar>
        {items.length === 0 ? (
          <S.EmptyCartMessage>O seu carrinho está vazio.</S.EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt="Foto de uma pizza" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBRL(item.preco as number)}</p>
                  </div>
                  <button onClick={() => dispatch(exclude(item.id))}></button>
                </S.CartItem>
              ))}
            </ul>
            <S.Price>
              <span>Valor total</span>
              <span>{parseToBRL(getTotalPrice(items))}</span>
            </S.Price>
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
      </S.CartSidebar>
    </S.CartContainer>
  )
}

export default Cart
