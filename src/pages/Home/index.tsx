import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

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
