import * as S from './styled'
import { useRef, useState } from 'react'
import { postFeedback } from 'services'

export const AddFeedbackForm = ({ productId, updateFeedbacks }) => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState('')

  const [rating, setRating] = useState('5')

  const [photo, setPhoto] = useState(null)
  const [photoError, setPhotoError] = useState('')

  const formRef = useRef(null)

  const initializeValues = () => {
    formRef.current.reset()
    setName('')
    setEmail('')
    setComment('')
    setRating('5')
  }

  const handlePhotoChange = (event) => {
    setPhotoError('')
    setPhoto(event.target.files[0])
  }

  const handleChange = (e, errorSetter, valueSetter) => {
    errorSetter('')
    valueSetter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let hasError = false

    if (!name.trim()) {
      setNameError('Full name can not be empty')
      hasError = true
    }
    if (!email.trim()) {
      setEmailError('Email can not be empty')
      hasError = true
    }
    if (!comment.trim()) {
      setCommentError('Comment can not be empty')
      hasError = true
    }

    if (!hasError) {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('product_id', Number(productId))
      formData.append('rating', rating)
      formData.append('comment', comment)
      if (photo) {
        formData.append('photo', photo)
      }

      postFeedback(formData)
        .then((res) => {
          if (res.errors) {
            Object.entries(res.errors).forEach((item) => {
              item[0] === 'name' && setNameError(item[1][0])
              item[0] === 'email' && setEmailError(item[1][0])
              item[0] === 'comment' && setCommentError(item[1][0])
            })
          } else {
            updateFeedbacks(res.data)
            initializeValues()
          }
        })
        .catch(() => setPhotoError('Please select a smaller photo'))
    }
  }

  return (
    <S.Root>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor='fullName'>Full name</S.Label>
          <S.Input
            placeholder='Type full name...'
            maxLength={255}
            type='text'
            value={name}
            onChange={(e) => handleChange(e, setNameError, setName)}
            id='fullName'
          />
          <S.ErrorMessage>{nameError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor='email'>Email</S.Label>
          <S.Input
            placeholder='Type email...'
            maxLength={255}
            type='text'
            value={email}
            onChange={(e) => handleChange(e, setEmailError, setEmail)}
            id='email'
          />
          <S.ErrorMessage>{emailError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor='comment'>Comment</S.Label>
          <S.Textarea
            as='textarea'
            placeholder='Type comment...'
            maxLength={255}
            type='text'
            value={comment}
            onChange={(e) => handleChange(e, setCommentError, setComment)}
            id='comment'
          />
          <S.ErrorMessage>{commentError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Rating: {rating}</S.Label>
          <S.RangeInput
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min={1}
            max={5}
            type='range'
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FileInput
            multiple={false}
            onChange={handlePhotoChange}
            type='file'
            accept='image/*'
            size='1000000'
          />
          <S.ErrorMessage>{photoError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.SubmitButton onClick={handleSubmit}>Add Feedback</S.SubmitButton>
      </S.Form>
    </S.Root>
  )
}
