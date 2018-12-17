import { products } from './index/reducer'
import { session } from './index/user/reducers'
import user from './user/reducer'

export const reducers = {
  products,
  session,
  user,
}
