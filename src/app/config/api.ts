import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://api.shoppingcart.com' : 'http://localhost:3001'

export const productUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'