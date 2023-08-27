import { ERROR_MESSAGE } from 'src/shared/constant'

export const getRules = {
  require() {
    return {
      required: true,
      message: ERROR_MESSAGE.required
    }
  }
}
