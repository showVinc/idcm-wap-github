import Base from '@/model/base'
import Moment from 'moment'

let Friend = class Friend extends Base{
  constructor(data){
    data = data?data:{}
    data.current_model = Friend //当前模型

    data.add_url = `${process.env.API.FRIENDS}/friends/demo`
    data.get_list_url =`${process.env.API.USER}/user/login`
    data.get_detail_url = `${process.env.API.FRIENDS}/friends/demo`
    data.update_url =`${process.env.API.FRIENDS}/friends/demo`
    data.delete_url = `${process.env.API.FRIENDS}/friends/demo`
    super(data)

    // this.cover = data.cover_pic || require('@/assets/images/home/user/png')
    this.userName = data.username || '匿名用户'
    this.date = Moment((data.date || 0)*1000).format('YYYY-MM-DD')
    this.main = data.main || ''
    this.imgList = data.imgList ||[]
    this.comment = data.comment || ''
    this.like = data.like || 0
  }
}

export default Friend
