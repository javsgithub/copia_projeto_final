import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../../components/Product'

type cartState = {
  items: Food[]
  isOpen: boolean
  isVisible: boolean
  isActive: boolean
}

const initialState: cartState = {
  items: [],
  isOpen: false,
  isVisible: false,
  isActive: false
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
      state.isOpen === true ? (state.isOpen = false) : (state.isOpen = true)
    },
    handleCheckout: (state) => {
      state.isActive === true
        ? (state.isActive = false)
        : (state.isActive = true)
    },
    // open: (state) => {
    //   state.isOpen = true
    // },
    // close: (state) => {
    //   state.isOpen = false
    // },
    handleModal: (state) => {
      state.isVisible === true
        ? (state.isVisible = false)
        : (state.isVisible = true)
    },
    clearState: (state) => {
      state.items = []
    }
    // show: (state) => {
    //   state.isVisible = true
    // },
    // hide: (state) => {
    //   state.isVisible = false
    // }
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
