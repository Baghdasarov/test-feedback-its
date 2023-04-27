import * as S from './styled'
import React, { memo } from 'react'
import { OPERATION_TYPES } from 'utils/constants'

export const ShoppingListItem = memo(
  ({ item: { id, name, quantity }, changeQuantity }) => {
    const handleIncrement = (e) => {
      e.preventDefault()
      changeQuantity(id, OPERATION_TYPES.increment)
    }

    const handleDecrement = (e) => {
      e.preventDefault()
      changeQuantity(id, OPERATION_TYPES.decrement)
    }

    return (
      <S.Root to={`/product/${id}`}>
        <S.Name>{name}</S.Name>
        <S.CountWrapper>
          <S.Count>Count: {quantity}</S.Count>
          <S.Button onClick={handleIncrement}>+</S.Button>
          <S.Button onClick={handleDecrement}>-</S.Button>
        </S.CountWrapper>
      </S.Root>
    )
  }
)
