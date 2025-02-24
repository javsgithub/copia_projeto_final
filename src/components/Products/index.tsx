import { useState } from 'react'
import { FoodPlace } from '../../pages/Home'
import { Container } from '../../styles'
import Modal from '../Modal'
import Product, { Food } from '../Product'
import { ProductsList } from './style'
import Cart from '../Cart'
import { useDispatch } from 'react-redux'
import { handleModal } from '../../store/reducers'
import Checkout from '../Checkout'

type Props = {
  foodPlace: FoodPlace
}

const Products = ({ foodPlace }: Props) => {
  const dispatch = useDispatch()
  const [food, setFood] = useState<Food>({
    id: 0,
    foto: '',
    preco: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const getFood = (product: Food) => {
    setFood({
      id: product.id,
      foto: product.foto,
      preco: product.preco as number,
      nome: product.nome,
      descricao: product.descricao,
      porcao: product.porcao as string
    })
  }

  return (
    <>
      <Container>
        <ProductsList>
          {foodPlace.cardapio.map((product) => (
            <li key={product.id}>
              <Product
                foto={product.foto}
                preco={product.preco}
                id={product.id}
                nome={product.nome}
                descricao={product.descricao}
                porcao={product.porcao}
                onClick={() => {
                  dispatch(handleModal())
                  getFood(product)
                }}
              />
            </li>
          ))}
        </ProductsList>
      </Container>
      <Modal food={food} closeModal={() => dispatch(handleModal())} />
      <Cart />
      <Checkout />
    </>
  )
}
export default Products
