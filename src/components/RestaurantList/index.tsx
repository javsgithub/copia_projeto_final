import RestaurantCard from '../Restaurant'

import { Container } from '../../styles'
import { List } from './style'

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            capa={restaurant.capa}
            descricao={restaurant.descricao}
            destacado={restaurant.destacado}
            avaliacao={restaurant.avaliacao}
            titulo={restaurant.titulo}
            tipo={restaurant.tipo}
            cardapio={restaurant.cardapio}
          />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
