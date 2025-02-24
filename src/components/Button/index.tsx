import { ButtonContainer, ButtonLink } from './style'

export type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  title: string
  children: string
  size?: 'small' | 'big'
  width: string
  onClick?: () => void
}

const Button = ({
  type,
  title,
  to,
  children,
  size = 'small',
  width,
  onClick
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        size={size}
        width={width}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type="link" to={to} title={title} size={size} width={width}>
      {children}
    </ButtonLink>
  )
}

export default Button
