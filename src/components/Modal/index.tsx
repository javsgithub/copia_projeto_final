import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { handleCart, add, handleModal } from '../../store/reducers'
import { parseToBRL } from '../../utils'
import { RootReducer } from '../../store'

import imageClosing from '../../assets/images/close 1.png'

import { Overlay } from '../Products/style'
import { Title } from '../Product/style'
import * as S from './style'

const Modal = ({ food, closeModal }: ModalProps) => {
  const { ModalIsActive } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(handleCart())
    dispatch(handleModal())
    dispatch(add(food))
  }

  return (
    <S.ModalContainer className={ModalIsActive ? 'visible' : ''}>
      <S.ModalContent>
        <img src={food.foto} alt="Foto de uma pizza" />
        <S.ModalInfos>
          <img
            onClick={closeModal}
            src={imageClosing}
            alt="Ícone de fechar a janela"
          />
          <Title>{food.nome}</Title>
          <S.Description>
            {food.descricao}
            <br />
            <br />
            Serve: de {food.porcao}
          </S.Description>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="218px"
            onClick={addToCart}
          >
            {`Adicionar ao carrinho - ${parseToBRL(Number(food.preco))}`}
          </Button>
        </S.ModalInfos>
      </S.ModalContent>
      <Overlay onClick={closeModal} />
    </S.ModalContainer>
  )
}

export default Modal
