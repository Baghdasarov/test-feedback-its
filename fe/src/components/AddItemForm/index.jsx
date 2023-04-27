import * as S from './styled'
import { useState } from 'react'
import { replaceNonAscii } from 'utils/helpers'
import { useEffect } from 'react'
import { postShoppingListItem } from 'services'

export const AddItemForm = ({ updateList }) => {
  const [val, setValue] = useState(localStorage.getItem('itemName') ?? '')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setError('')

    const formattedVal = replaceNonAscii(e.target.value)

    setValue(formattedVal)
    localStorage.setItem('itemName', formattedVal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!val.trim()) {
      setError('Product name can not be empty')
    } else {
      postShoppingListItem({ name: val }).then((newItem) => {
        setValue('')
        localStorage.setItem('itemName', '')
        updateList(newItem)
      })
    }
  }

  useEffect(() => {}, [])

  return (
    <S.Root>
      <S.Form onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor='productName'>Product name</S.Label>
          <S.Input
            placeholder='Type name...'
            maxLength={255}
            type='text'
            value={val}
            onChange={handleChange}
            id='productName'
          />
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.InputWrapper>
        <S.SubmitButton onClick={handleSubmit}>Add product</S.SubmitButton>
      </S.Form>
    </S.Root>
  )
}
