import { POPULAR_PACKAGES } from '@/constants/url'
import { Request, getParamsUrl } from '@/core/request'

export default {
  get: params => Request.get(`${POPULAR_PACKAGES}${getParamsUrl(params)}`),
}
