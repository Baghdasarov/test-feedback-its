import { AddItemForm, ShoppingListItem } from 'components'
import * as S from './styled'
import { LOADING_STATUSES } from 'utils/constants'

export const ShoppingList = ({
  shoppingList = [],
  loadingStatus,
  changeItemQuantity,
  updateList,
}) => {
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
      <S.Title>Shopping List</S.Title>
      <AddItemForm updateList={updateList} />
      <S.List>
        {loadingStatus === LOADING_STATUSES.idle ||
        loadingStatus === LOADING_STATUSES.pending
          ? 'Loading...'
          : shoppingList.length === 0 && 'No items just yet'}
        {shoppingList.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            changeQuantity={changeItemQuantity}
          />
        ))}
      </S.List>
    </S.Root>
  )
}
