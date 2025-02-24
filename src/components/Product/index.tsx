import Button from '../Button'
import { Description, ProductContainer, Title } from './style'

export type Food = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  onClick?: () => void
}

const Product = ({ foto, nome, descricao, onClick }: Food) => {
  const getDescription = () =>
    descricao.length > 147 ? descricao.slice(0, 146) + '...' : descricao

  return (
    <ProductContainer>
      <img src={foto} alt="Foto de uma pizza" />
      <Title>{nome}</Title>
      <Description>{getDescription()}</Description>
      <Button
        type="button"
        title="Clique para saber mais sobre este prato"
        size="big"
        width="304px"
        onClick={onClick}
      >
        Adicionar ao carrinho
      </Button>
    </ProductContainer>
  )
}

export default Product
