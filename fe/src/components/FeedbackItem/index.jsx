import * as S from './styled'
import React, { memo } from 'react'
import { hostMachine } from 'utils/constants'

export const FeedbackItem = memo(
  ({ item: { comment, date, email, id, name, rating, photo } }) => {
    return (
      <S.Root>
        <S.NameEmailWrapper>
          <S.Rating>Rating: {rating}</S.Rating>
          <S.Name>{name}</S.Name>
          <S.Email>{email}</S.Email>
        </S.NameEmailWrapper>
        <S.CommentWrapper>
          <S.Comment>Comment: {comment}</S.Comment>
          {!!photo && (
            <S.FeedbackImg src={`${photo}`} alt='feedback' />
          )}
        </S.CommentWrapper>
      </S.Root>
    )
  }
)
