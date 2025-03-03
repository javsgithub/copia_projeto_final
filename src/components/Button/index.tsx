import * as S from './style'

const Button = ({
  type,
  title,
  to,
  children,
  size = 'small',
  width,
  onClick,
  disabled
}: ButtonProps) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        size={size}
        width={width}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink type="link" to={to} title={title} size={size} width={width}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
