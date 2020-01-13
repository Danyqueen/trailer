// 爬虫puppeteer爬取豆瓣电影top250数据

const puppeteer = require('puppeteer')

const url = `https://movie.douban.com/top250`

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  console.log('Start visit the target page...')

  // const browser = await puppeteer.launch({
  //   args: ['--no-sandbox'],
  //   dumpio: false
  // })
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  // 等待到页面空闲时，再等3s，可判断为页面加载完毕
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })
  // promise的定时函数
  await sleep(3000)
 
  // 等待下一页按钮出现
  await page.waitForSelector('.next')

  let results = []
  
  for(let i = 0; i < 10; i++) {
    // 在爬取页面的浏览器中执行
    const result = await page.evaluate(() => {
      // 此代码是在浏览器中执行，因此用var
      var $ = window.$
      var items = $('.grid_view li')
      var links = []

      if (items.length > 0) {
        items.each((index, item) => {
          let it = $(item)
          let title = it.find('.hd').find('.title').text().trim()
          let director = it.find('.bd').find('p').text().trim()
          let rating = Number(it.find('.rating_num').text())
          let poster = it.find('.pic').find('img').attr('src')

          links.push({
            title,
            director,
            rating,
            poster
          })
        })
      }
      return links
    })
    results = results.concat(result)

    // 豆瓣top 250只有10页，第10页没有next按钮
    if (i < 9) {
      await page.click('.next a')
      await sleep(3000)
    }
  }
  browser.close()
  console.log(results, results.length)
})()