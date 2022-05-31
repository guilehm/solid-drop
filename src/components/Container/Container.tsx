import React from "react"
import * as S from "./Container.styles"


interface Props {
  children: React.ReactNode[] | React.ReactNode
}


const Container: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>{children}</S.Container>
  )
}


export default Container
