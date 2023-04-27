import styled from 'styled-components/macro'

export const Root = styled.div`
  text-align: start;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  padding: 12px;
  display: flex;
  gap: 48px;
  overflow: hidden;

  transition: all 0.2s linear;
  :hover {
    scale: 1.04;
  }
`

export const NameEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 30%;
`

export const Name = styled.div``

export const Email = styled.div`
  font-size: 12px;
  color: #222;
`

export const Rating = styled.div`
  color: #389;
  font-size: 14px;
`

export const CommentWrapper = styled.div``

export const Comment = styled.div`
  font-size: 12px;
  line-height: 18px;
  word-break: break-all;
`

export const FeedbackImg = styled.img`
  margin-top: 12px;
  max-width: 260px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`
