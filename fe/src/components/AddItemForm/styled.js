import styled from 'styled-components'

export const Root = styled.div``

export const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: start;
  width: 100%;
  * {
    width: 100%;
  }
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 21px;
`

export const Input = styled.input`
  height: 40px;
  outline: none;
  font-size: 18px;
  line-height: 27px;
  padding-inline: 8px;
`

export const ErrorMessage = styled.div`
  height: 24px;
  font-size: 12px;
  line-height: 18px;
  color: red;
`

export const SubmitButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #4a937b;
  color: white;
  transition: all 0.2s linear;
  :hover {
    scale: 1.04;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }
`
