import {actionTypes} from '../../constants'
export const addSlot = ({productID,
                          size,
                          amount,
                          sessionID})=> ({
  type: actionTypes.CREATE_SLOT,
  payload: {
    productID,
    size,
    amount,
    sessionID
  }
})