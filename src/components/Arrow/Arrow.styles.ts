import styled from "styled-components"

type ArrowType = {
  rotate?: string
}

export const Arrow = styled.i<ArrowType>`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(${(props) => props.rotate || "135deg"});
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.2;
  }
`
