import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Products from '../../components/Products'
import RestaurantHeader from '../../components/RestaurantHeader'

import { useGetProductsQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: products, isLoading: DataLoading } = useGetProductsQuery(
    id as string
  )

  return (
    <>
      <RestaurantHeader />
      <Banner banner={products} />
      <Products foodPlace={products} isLoading={DataLoading} />
      <Footer />
    </>
  )
}

export default Profile
