import { sendJSON } from './sendJSON'

export const getProductDetails = async (productID) => {
  return await sendJSON('/v1/product/detail', 'POST', {
    productID
  })
}