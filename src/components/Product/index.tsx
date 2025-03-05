import Button from '../Button'

import * as S from './style'

const Product = ({ foto, nome, descricao, onClick }: Food) => {
  const getDescription = () =>
    descricao.length > 147 ? descricao.slice(0, 146) + '...' : descricao

  return (
    <S.ProductContainer>
      <img src={foto} alt="Foto de uma pizza" />
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescription()}</S.Description>
      <Button
        type="button"
        title="Clique para saber mais sobre este prato"
        size="big"
        width="100%"
        onClick={onClick}
      >
        Adicionar ao carrinho
      </Button>
    </S.ProductContainer>
  )
}

export default Product
