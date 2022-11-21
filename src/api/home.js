import {request} from '@/utils/ajax'

export function getNavlist() {
  return request({
    url: '/home/navList'
  })
}
