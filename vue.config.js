const express = require('express') // 引入express框架
const app = express() // 实例化对象

const appData = require('./public/js/mock.json') // 引入数据
const intro  = appData.intro // 取出数据
const leader  = appData.leader // 取出数据

const apiRoutes = express.Router() // 引入路由
app.use('/api', apiRoutes)

module.exports = {
  publicPath: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  productionSourceMap: true, // 生产环境是否生成sourceMap文件
  devServer: {
    // port: 9090, // 端口号
    // open: true, // 启动完自动打开浏览器
    before(app) {
      app.post('/evaluate',(req,res) =>{
        console.log(req)
        if(req != null){
          res.json({
            code:200
          })
        }
      })
      app.get('/api/leader', (req, res) => {
        res.json({
          code: 0,
          data: leader
        })
      })
      app.get('/intro', (req, res) => {
        res.json({
          code: 0,
          data: intro
        })
      })
      app.post('/login',(req,res) =>{
        console.log(req)
        if(req != null){
          res.json({
            code:200
          })
        }
      })

    }
  }
}
