import { pick } from './helper'
import { character, string } from './basic'
import { date } from './date'
import CHINESE from './address_dict'

/**
 * 随机生成一个 GUID (uuid v4)
 */
export const uuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 随机生成一个 GUID
 */
export const guid = uuid

/**
 * 随机生成一个 18 位身份证

 */
export const idCard = function () {
  const rank = '7910584216379105842'
  const last = '10X98765432'

  let sum = 0
  let idcard = pick(CHINESE).id + date('yyyyMMdd') + string('number', 3)

  for (let i = 0; i < idcard.length; i++) {
    sum += (idcard[i] as any) * (rank[i] as any)
  }

  idcard += last[sum % 11] // 效验码

  return idcard
}

/**
 * 随机生成一个国内手机号码
 */
export const mobile = function () {
  return `1${character('34578')}${string('number', 9)}`
}
