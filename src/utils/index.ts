import { Food } from '../components/Product'

export const getTotalPrice = (items: Food[]) => {
  return items.reduce((acumulador, valor) => {
    return (acumulador += valor.preco as number)
  }, 0)
}

export const parseToBRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
