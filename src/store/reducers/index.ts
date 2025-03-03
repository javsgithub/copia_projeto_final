import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type cartState = {
  items: Food[]
  CartIsActive: boolean
  ModalIsActive: boolean
  CheckoutIsActive: boolean
}

const initialState: cartState = {
  items: [],
  CartIsActive: false,
  ModalIsActive: false,
  CheckoutIsActive: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        return alert('O item já foi adicionado ao carrinho!')
      }
    },
    exclude: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })
    },
    handleCart: (state) => {
      state.CartIsActive === true
        ? (state.CartIsActive = false)
        : (state.CartIsActive = true)
    },
    handleModal: (state) => {
      state.ModalIsActive === true
        ? (state.ModalIsActive = false)
        : (state.ModalIsActive = true)
    },
    handleCheckout: (state) => {
      state.CheckoutIsActive === true
        ? (state.CheckoutIsActive = false)
        : (state.CheckoutIsActive = true)
    },
    clearState: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  handleCart,
  handleCheckout,
  handleModal,
  exclude,
  clearState
} = cartSlice.actions
export default cartSlice.reducer
