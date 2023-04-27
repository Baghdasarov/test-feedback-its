export const apiUrl = process.env.REACT_APP_HOST_MACHINE + '/api'

export const API = {
  shoppingList: `${apiUrl}/products`,
  shoppingListItem: `${apiUrl}/item`,
  feedbacks: `${apiUrl}/feedbacks`,
}
