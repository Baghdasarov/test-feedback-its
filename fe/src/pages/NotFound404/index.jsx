import { NavLink } from 'react-router-dom'
import { routes } from 'routes'

export const NotFound404 = () => {
  return (
    <div>
      <div>ERROR 404</div>
      <h3>Page not found</h3>
      <NavLink to={routes.shoppingList}>Go to Shopping List</NavLink>
    </div>
  )
}
