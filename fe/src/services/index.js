import { API } from 'api'

export const getShoppingList = () =>
  fetch(API.shoppingList)
    .then((res) => res.json())
    .then((res) => res.data)

export const getShoppingListItem = (id) =>
  fetch(`${API.shoppingList}/${id}`)
    .then((res) => res.json())
    .then((res) => res.data)

export const postShoppingListItem = (data) =>
  fetch(API.shoppingList, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.data)

export const removeShoppingListItem = (id) =>
  fetch(`${API.shoppingList}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const postFeedback = (data) =>
  fetch(API.feedbacks, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    body: data,
  }).then((res) => res.json())
