import * as S from "./Button.styles"

type ButtonProps = {
  children: JSX.Element | string
  color?: string
  bgColor?: string
  margin?: string
}


const Button: React.FC<ButtonProps> = ({ children, margin, color, bgColor }): JSX.Element => (
  <S.Button
    margin={margin}
    color={color}
    bgColor={bgColor}>
    {children}
  </S.Button>
)


export default Button
