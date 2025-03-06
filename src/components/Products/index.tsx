import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Modal from '../Modal'
import Product from '../Product'
import Cart from '../Cart'
import Checkout from '../Checkout'

import { handleModal } from '../../store/reducers'
import Loader from '../../Loader'

import { ProductContainer, ProductsList } from './style'

const Products = ({ foodPlace, isLoading }: ProductsProps) => {
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <ProductContainer>
        <ProductsList>
          {foodPlace &&
            foodPlace.cardapio.map((product) => (
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
      </ProductContainer>
      <Modal food={food} closeModal={() => dispatch(handleModal())} />
      <Cart />
      <Checkout />
    </>
  )
}
export default Products
