import styled from "styled-components"

type ButtonType = {
  color?: string
  bgColor?: string
  margin?: string
}

export const Button = styled.a<ButtonType>`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.35em 0.65em;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bgColor || "black"};
  text-align: center;
  border-radius: 0.25rem;
  white-space: nowrap;
  cursor: pointer;
  margin: ${(props) => props.margin || "0"};
`
