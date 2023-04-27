import { AddFeedbackForm } from 'components/AddFeedbackForm'
import { FeedbackItem } from 'components/FeedbackItem'
import * as S from 'pages/Product/styled'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShoppingListItem } from 'services'
import { FILTER_TYPES, LOADING_STATUSES } from 'utils/constants'

export const Product = () => {
  const [loadingStatus, setLoadingStatus] = useState(LOADING_STATUSES.idle)
  const [product, setProduct] = useState(null)
  const [feedbacks, setFeedbacks] = useState([])
  const [filterBy, setFilterBy] = useState('date')
  const [dateFilter, setDateFiler] = useState(FILTER_TYPES.asc)
  const [ratingFilter, setRatingFiler] = useState(FILTER_TYPES.asc)

  const { id } = useParams()

  const sortFeedbacks = () => {
    if (filterBy === 'date') {
      if (dateFilter === FILTER_TYPES.asc) {
        return feedbacks
      } else {
        return [...feedbacks].reverse()
      }
    } else {
      return [...feedbacks].sort((a, b) =>
        ratingFilter === FILTER_TYPES.asc
          ? a.rating - b.rating
          : b.rating - a.rating
      )
    }
  }

  const handleDateFilter = () => {
    if (filterBy === 'rating') {
      setFilterBy('date')
    }
    if (dateFilter === FILTER_TYPES.asc) {
      setDateFiler(FILTER_TYPES.desc)
    } else {
      setDateFiler(FILTER_TYPES.asc)
    }
  }

  const handleRatingFilter = () => {
    if (filterBy === 'date') {
      setFilterBy('rating')
    }

    if (ratingFilter === FILTER_TYPES.asc) {
      setRatingFiler(FILTER_TYPES.desc)
    } else {
      setRatingFiler(FILTER_TYPES.asc)
    }
  }

  const updateProductFeedbacks = (feedback) => {
    setProduct((prev) => ({
      ...prev,
      feedbacks: [...prev.feedbacks, feedback],
    }))
  }

  useEffect(() => {
    setLoadingStatus(LOADING_STATUSES.pending)
    getShoppingListItem(id)
      .then((res) => {
        setProduct(res)
        setLoadingStatus(LOADING_STATUSES.succeeded)
      })
      .catch(() => {
        setLoadingStatus(LOADING_STATUSES.failed)
      })
  }, [id])

  useEffect(() => {
    if (product?.feedbacks) {
      setFeedbacks(product.feedbacks)
    }
  }, [product?.feedbacks])

  if (loadingStatus === LOADING_STATUSES.failed) {
    return (
      <div>
        Something went wrong.
        <br />
        Please try reloading the page
      </div>
    )
  }

  return (
    <S.Root>
      <S.Title>{product?.name}</S.Title>
      <AddFeedbackForm
        productId={id}
        updateFeedbacks={updateProductFeedbacks}
      />
      <S.List>
        <S.FiltersWrapper>
          <S.FilterButton
            className={filterBy === 'date' ? 'active' : ''}
            onClick={handleDateFilter}
          >
            Date {dateFilter}
          </S.FilterButton>
          <S.FilterButton
            className={filterBy === 'rating' ? 'active' : ''}
            onClick={handleRatingFilter}
          >
            Rating {ratingFilter}
          </S.FilterButton>
        </S.FiltersWrapper>
        {loadingStatus === LOADING_STATUSES.idle ||
        loadingStatus === LOADING_STATUSES.pending
          ? 'Loading...'
          : !feedbacks?.length
          ? 'No feedbacks just yet'
          : sortFeedbacks().map((item) => (
              <FeedbackItem item={item} key={item.id} />
            ))}
      </S.List>
    </S.Root>
  )
}
