import { products } from './index/reducer'
import { session } from './index/user/reducers'
import { session as _session } from './admin/reducers'

export const reducers = {
  products,
  session,
  _session,
}
