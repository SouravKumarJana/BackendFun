require('dotenv').config()
const express = require('express')              //import express

const app = express()                           //create app from express

const port = 4000                               // here choose a port

app.get('/', (req, res) => {                    //'/' (localhost:3000/) -> at home page response will be send  //req : request ; res : response
  res.send('Hello World!')
})

app.get('/twitter' , (req, res) =>{             // at '/twitter'( localhost:3000/twitter to see, write it at adress bar) the response will be send  
    res.send('hitesh')
})

app.get('/login' ,(req, res) => {
    res.send('<h1>please login </h1>')
})

app.get('/youtube' , (req, res) =>{
    res.send('<h2> go to youtube</h2>')
})


app.listen(process.env.PORT, () => {                                //Server listining 
  console.log(`Example app listening on port ${port}`)
})