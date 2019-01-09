import React from 'react'

export default ( { match: { params: { id } } } ) => {
  console.log(id)
  return <div>Product page</div>
}
