import styled from "styled-components"


export const Title = styled.h2`
  font-size: 3.4rem;
  font-weight: 300;
  line-height: 60px;
  padding-bottom: 20px;
  margin: 0;
`

export const Subtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  padding-bottom: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 0.2px black;
  }
`

export const List = styled.div`
  display: flex;
  align-self: flex-start;
`
