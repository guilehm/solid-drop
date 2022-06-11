import * as S from "./Button.styles"

type ButtonProps = {
  children: JSX.Element | string
  color?: string
  bgColor?: string
  margin?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}


const Button: React.FC<ButtonProps> = ({
  children, margin, color, bgColor, onClick,
}): JSX.Element => (
  <S.Button
    margin={margin}
    color={color}
    bgColor={bgColor}
    onClick={onClick}>
    {children}
  </S.Button>
)


export default Button
