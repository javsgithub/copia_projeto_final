declare type FoodPlace = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

declare type Food = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  onClick?: () => void
}

declare type BannerProps = {
  banner: FoodPlace
}

declare type ButtonProps = {
  type: 'button' | 'link' | 'submit'
  to?: string
  title: string
  children: string
  size?: 'small' | 'big'
  width: string
  onClick?: () => void
  disabled?: boolean
}

declare type ModalProps = {
  food: Food
  closeModal: () => void
}

declare type ProductsProps = {
  foodPlace: FoodPlace
}

declare type RestaurantListProps = {
  restaurants: FoodPlace[]
}

declare type TagProps = {
  children: string
}
