import { sendJSON } from './sendJSON'

export const createSlot = async (payload) => {
  return await sendJSON('/v1/product/addslot', 'POST', {
    ...payload
  })
}