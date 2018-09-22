import { rootReducer } from '../rootReducer'
it('has initial location of /index', () => {
  expect(rootReducer('', { type: 'HOME' })).toEqual({ location: 'index/index' })
})
it('redirects to product page', () => {
  expect(rootReducer('', { type: 'PRODUCT' })).toEqual({ location: 'product' })
})
it('redirects to 404', () => {
  expect(rootReducer('', { type: '404' })).toEqual({ location: 'HOME' })
})
