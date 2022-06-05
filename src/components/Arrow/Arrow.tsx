import * as S from "./Arrow.styles"


const Arrow = ({ rotate, onClick }: { rotate?: string, onClick?: React.MouseEventHandler<HTMLElement> }) => {
  return (
    <S.Arrow onClick={onClick} rotate={rotate}></S.Arrow>
  )
}


export default Arrow
