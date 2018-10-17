import request from '@/utils/request';

//banner
export const getbanner = ()=>{
  return request({
    url:"/api/index/getbanner",
    method:"post",

  })
}

//获取今日赛程
export const getevent = (items)=>{
  let data = {
    ...items
  }
  return request({
    url:"/api/index/getevent",
    method:"post",
    data
  })
}

//获取赛程安排
export const getschedule = ()=>{
  return request({
    url:"/api/index/getschedule",
    method:"post",
  })
}

//获取参赛国家
export const getcountry = ()=>{
  return request({
    url:"/api/index/getcountry",
    method:"post",
  })
}

//获取比赛竞猜
export const getguess = ()=>{
  return request({
    url:"/api/index/getguess",
    method:"post",
  })
}

//奖牌榜
export const getagmedaltable = ()=>{
  return request({
    url:"/api/index/getagmedaltable",
    method:"post",
  })
}

//获取电竞战队
export const getesportsteam = ()=>{
  return request({
    url:"/api/index/getesportsteam",
    method:"post",
  })
}

//获取国家队成员列表
export const getesportsmember = (items)=>{
  let data = {
    ...items
  }
  return request({
    url:"/api/index/getesportsmember",
    method:"post",
    data
  })
}


//获取精彩时刻
export const getvideo = ()=>{
  return request({
    url:"/api/index/getvideo",
    method:"post",
  })
}

//获取活动列表
export const getactivity = ()=>{
  return request({
    url:"/api/index/getactivity",
    method:"post",
  })
}

//获取新闻列表
export const getnewsvideo = ()=>{
  return request({
    url:"/api/index/getnewsvideo",
    method:"post",
  })
}

//获取项目列表
export const getitems = ()=>{
  return request({
    url:"/api/index/getitems",
    method:"post",
  })
}