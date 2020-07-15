import { request } from '../../request/index.js';
//Page Object
Page({
  data: {
    swiperList: [],
    cateNavList:[]
  },
  //options(Object)
  onLoad: function (options) {
    this.getSwiperList(),
    this.getCateNavList()
  },
  getSwiperList() {
    //发送请求获取轮播图数据
    // request({ url: "http://bitest1.softorg.com:81/api/FileManage/GetFileTree?id=1" }).then(res => {
    //   console.log(res)
    // }).catch(error => {
    //   console.log(error)
    // })
    this.setData({
      swiperList: [
        '../../images/1.png',
        '../../images/2.png',
        '../../images/3.png'
      ]
    })
  },
  getCateNavList() {
    this.setData({
      cateNavList:[
        {title:"分类",img:"../../images/p1.png"},
        {title:"秒杀拍",img:"../../images/p2.png"},
        {title:"超市购",img:"../../images/p3.png"},
        {title:"母婴品",img:"../../images/p4.png"},
      ]
    })
  }
});
