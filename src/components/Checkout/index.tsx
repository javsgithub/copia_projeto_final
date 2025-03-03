import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'

import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { handleCart, handleCheckout, clearState } from '../../store/reducers'
import { parseToBRL, getTotalPrice } from '../../utils'

import { Overlay } from '../Products/style'
import * as S from './style'

const Checkout = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { CheckoutIsActive, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [delivery, setDelivery] = useState(true)
  const [payment, setPayment] = useState(false)
  const navigate = useNavigate()

  const handleDelivery = () => {
    delivery === true ? setDelivery(false) : setDelivery(true)
  }

  const handlePayment = () => {
    payment === true ? setPayment(false) : setPayment(true)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      deliveryAddress: '',
      city: '',
      zipcode: '',
      number: '',
      complement: '',
      nameOnCard: '',
      cardNumber: '',
      cardCode: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatório'),
      zipcode: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('Este campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O nome precisa ter pelo menos 1 caractere')
        .required('Este campo é obrigatório'),
      complement: Yup.string().max(
        20,
        'O complemento não pode exceder a 20 caracteres'
      ),
      nameOnCard: Yup.string().when((values, schema) =>
        payment ? schema.required('Este campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payment ? schema.required('Este campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payment ? schema.required('Este campo é obrigatório') : schema
      ),
      expiryMonth: Yup.string().when((values, schema) =>
        payment ? schema.required('Este campo é obrigatório') : schema
      ),
      expiryYear: Yup.string().when((values, schema) =>
        payment ? schema.required('Este campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((product) => ({
          id: product.id,
          price: product.preco as number
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.deliveryAddress,
            city: values.city,
            zipCode: values.zipcode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameOnCard,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiryMonth),
              year: Number(values.expiryYear)
            }
          }
        }
      })
    }
  })

  const checkImputContainError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const containError = isTouched && isInvalid

    return containError
  }

  const goToPayment = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        handleDelivery()
        handlePayment()
      }
    })
  }

  return (
    <S.CheckoutContainer className={CheckoutIsActive ? 'is-active' : ''}>
      <Overlay />
      {isSuccess && data ? (
        <S.MessageContainer>
          <S.ConfirmationMessage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.ConfirmationMessage>
          <Button
            type="button"
            title="Clique para adicionar este item ao carrinho"
            size="big"
            width="344px"
            onClick={() => {
              navigate('/')
              dispatch(handleCheckout())
              dispatch(clearState())
            }}
          >
            Concluir
          </Button>
        </S.MessageContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryContainer className={delivery ? '' : 'invisible'}>
            <S.FormSidebar>
              <p>Entrega</p>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkImputContainError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="deliveryAddress">Endereço</label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={form.values.deliveryAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkImputContainError('deliveryAddress') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkImputContainError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipcode">CEP</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={form.values.zipcode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkImputContainError('zipcode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkImputContainError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.ButtonContainer>
                <Button
                  type="button"
                  title="Clique para preencher os dados de pagamento"
                  size="big"
                  width="344px"
                  onClick={goToPayment}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button"
                  title="Clique para revisar os itens do seu carrinho"
                  size="big"
                  width="344px"
                  onClick={() => {
                    dispatch(handleCart())
                    dispatch(handleCheckout())
                  }}
                >
                  Voltar para o carrinho
                </Button>
              </S.ButtonContainer>
            </S.FormSidebar>
          </S.DeliveryContainer>
          {payment && (
            <S.PaymentContainer>
              <S.FormSidebar>
                <p>
                  Pagamento - Valor a pagar{' '}
                  <span>{parseToBRL(getTotalPrice(items))}</span>
                </p>
                <S.InputGroup>
                  <label htmlFor="nameOnCard">Nome no Cartão</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={form.values.nameOnCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkImputContainError('nameOnCard') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <ReactInputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <ReactInputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('cardCode') ? 'error' : ''
                      }
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row className="bottom-space">
                  <S.InputGroup>
                    <label htmlFor="expiryMonth">Mês de vencimento</label>
                    <ReactInputMask
                      type="text"
                      id="expiryMonth"
                      name="expiryMonth"
                      value={form.values.expiryMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('expiryMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiryYear">Ano de vencimento</label>
                    <ReactInputMask
                      type="text"
                      id="expiryYear"
                      name="expiryYear"
                      value={form.values.expiryYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkImputContainError('expiryYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.ButtonContainer className="button-spaces">
                  <Button
                    type="submit"
                    title="Clique para finalizar a sua compra"
                    size="big"
                    width="344px"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    type="button"
                    title="Clique para editar o endereço de entrega"
                    size="big"
                    width="344px"
                    onClick={() => {
                      handleDelivery()
                      handlePayment()
                    }}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.ButtonContainer>
              </S.FormSidebar>
            </S.PaymentContainer>
          )}
        </form>
      )}
    </S.CheckoutContainer>
  )
}
export default Checkout
