import Tag from '../Tag'
import Button from '../Button'

import estrela from '../../assets/images/estrela.png'

import * as S from './style'

const RestaurantCard = ({
  id,
  capa,
  titulo,
  descricao,
  avaliacao,
  destacado,
  tipo
}: FoodPlace) => {
  const breakpoint = window.matchMedia('(max-width: 1024px)')

  const getDescription = () => {
    if (breakpoint.matches) {
      if (descricao.length > 162) {
        return descricao.slice(0, 161) + '...'
      }
    } else {
      if (descricao.length > 245) {
        return descricao.slice(0, 244) + '...'
      }
    }
  }

  return (
    <S.RestaurantContainer>
      <S.Cover src={capa} alt="Foto de comida japonesa" />
      <S.InfoTags>
        {destacado ? (
          <>
            <Tag>Destaque da semana</Tag>
            <Tag>{tipo}</Tag>
          </>
        ) : (
          <Tag>{tipo}</Tag>
        )}
      </S.InfoTags>
      <S.Bottom>
        <S.Header>
          <S.Title>{titulo}</S.Title>
          <S.RateContainer>
            <span>{avaliacao}</span>
            <img src={estrela} alt="Estrela" />
          </S.RateContainer>
        </S.Header>
        <S.Description>{getDescription()}</S.Description>
        <Button
          type="link"
          to={`/profile/${id}`}
          title="Clique para ver as opções deste restaurante"
          width="82px"
          size="small"
        >
          Saiba mais
        </Button>
      </S.Bottom>
    </S.RestaurantContainer>
  )
}

export default RestaurantCard
