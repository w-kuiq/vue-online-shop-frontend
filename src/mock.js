// mock.js

// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(4, 12), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newsList
}

const productsData = function () {
  let productList = []
  for (let i = 0; i < 10; i++) {
    let newProdcutObject = {
      _id: i,
      name: Random.csentence(1, 3),
      description: Random.csentence(5, 20),
      price: Random.csentence(1, 3),
      image: Random.image()
    }
    productList.push(newProdcutObject)
  }
  return productList
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节
Mock.mock('/mock/products', productsData) // 后面讲这个api的使用细节
