const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const list = [
  {
    id: 1,
    name: '冷雪瞳',
    age: 21
  },
  {
    id: 2,
    name: '冷雪瞳',
    age: 21
  }
]

app.get('/api/getList', (req, res) => {
  // console.log(req,res);
  req.statusCode = 200
  res.send(list)
})

app.post('/api/addList', (req,res) => {
  // console.log(req);
  // console.log(res);
  console.log(req.body);
  res.json(req.body)
})

app.listen(9999, () => {
  console.log(`http://localhost:9999`);
})


// app.listen('8888',() => {
//   console.log('http://localhost:8888');
// })

// const http = require('http')
// const port = 3000

// const server = http.createServer()
// server.on('request', (req, res) => {
//   res.end('1')
// })
// server.listen(port, () => {
//   console.log(`服务器运行在 http://localhost:${port}`)
// })


// const http = require('http')
// // const cors = require('cors')

// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('hello world')
// })

// server.listen(port, () => {
//   console.log(`服务器运行在 http://localhost:${port}`)
// })