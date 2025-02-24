import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { Food } from '../../components/Product'

import { useGetRestaurantsQuery } from '../../services/api'

export type FoodPlace = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
