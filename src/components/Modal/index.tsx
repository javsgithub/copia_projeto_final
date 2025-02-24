import Button from '../Button'
import { Title } from '../Product/style'
import { Description, ModalContainer, ModalContent, ModalInfos } from './style'
import imageClosing from '../../assets/images/close 1.png'
import { Food } from '../Product'

import { handleCart, add } from '../../store/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Overlay } from '../Products/style'
import { RootReducer } from '../../store'
import { parseToBRL } from '../../utils'

type Props = {
  food: Food
  closeModal: () => void
}

const Modal = ({ food, closeModal }: Props) => {
  const { isVisible } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(handleCart())
    dispatch(add(food))
  }

  return (
    <ModalContainer onClick={closeModal} className={isVisible ? 'visible' : ''}>
      <ModalContent>
        <img src={food.foto} alt="Foto de uma pizza" />
        <ModalInfos>
          <img
            onClick={closeModal}
            src={imageClosing}
            alt="Ícone de fechar a janela"
          />
          <Title>{food.nome}</Title>
          <Description>
            {food.descricao}
            <br />
            <br />
            Serve: de {food.porcao}
          </Description>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="218px"
            onClick={addToCart}
          >
            {`Adicionar ao carrinho - ${parseToBRL(Number(food.preco))}`}
          </Button>
        </ModalInfos>
      </ModalContent>
      <Overlay />
    </ModalContainer>
  )
}

export default Modal
