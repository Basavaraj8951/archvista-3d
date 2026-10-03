export { FURNITURE as PRODUCTS } from './furniture'
export { FURNITURE } from './furniture'
import { FURNITURE } from './furniture'
export const getProduct = (id) => FURNITURE.find((p) => p.id === id)
