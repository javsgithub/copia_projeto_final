import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './style'
import { FoodPlace } from '../../pages/Home'

const RestaurantCard = ({
  id,
  capa,
  titulo,
  descricao,
  avaliacao,
  destacado,
  tipo
}: FoodPlace) => {
  const getDescription = () =>
    descricao.length > 245 ? descricao.slice(0, 244) + '...' : descricao

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
