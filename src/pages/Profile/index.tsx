import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Products from '../../components/Products'
import RestaurantHeader from '../../components/RestaurantHeader'

import { useGetProductsQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: products } = useGetProductsQuery(id as string)

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantHeader />
      <Banner banner={products} />
      <Products foodPlace={products} />
      <Footer />
    </>
  )
}

export default Profile
