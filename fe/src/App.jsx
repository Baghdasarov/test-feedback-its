import { Product, NotFound404, ShoppingList } from 'pages'
import { routes } from 'routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { LOADING_STATUSES, OPERATION_TYPES } from 'utils/constants'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { getShoppingList, removeShoppingListItem } from 'services'

export const App = () => {
  const [shoppingList, setShoppingList] = useState([])
  const [loadingStatus, setLoadingStatus] = useState(LOADING_STATUSES.idle)

  const pages = [
    {
      path: routes.shoppingList,
      Component: ShoppingList,
    },
    {
      path: routes.product,
      Component: Product,
    },
    {
      path: routes.notFound404,
      Component: NotFound404,
    },
  ]

  const changeListItemQuantity = useCallback(
    (id, opType = OPERATION_TYPES.increment) => {
      if (opType === OPERATION_TYPES.increment) {
        setShoppingList((prev) =>
          prev.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }
            }

            return item
          })
        )
      }

      if (opType === OPERATION_TYPES.decrement) {
        const listItem = shoppingList.find((item) => item.id === id)

        if (listItem.quantity <= 1) {
          removeShoppingListItem(id)
          setShoppingList((prev) => prev.filter((item) => item.id !== id))
        } else {
          setShoppingList((prev) =>
            prev.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              }

              return item
            })
          )
        }
      }
    },
    [shoppingList]
  )

  const updateList = useCallback((item) => {
    setShoppingList((prev) => [...prev, item])
  }, [])

  useEffect(() => {
    setLoadingStatus(LOADING_STATUSES.pending)

    getShoppingList()
      .then((res) => {
        setShoppingList(res)
        setLoadingStatus(LOADING_STATUSES.succeeded)
      })
      .catch(() => {
        setLoadingStatus(LOADING_STATUSES.failed)
      })
  }, [])

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Routes>
          {pages.map(({ path, Component }) => (
            <Route
              path={path}
              element={
                <Component
                  shoppingList={shoppingList}
                  loadingStatus={loadingStatus}
                  changeItemQuantity={changeListItemQuantity}
                  updateList={updateList}
                />
              }
              key={path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
