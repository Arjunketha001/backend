require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    console.log('Twitter route hit');
    res.send('NOte devloop!');
});
  
app.get('/login' ,(req,res)=>{
    res.send('<h1> cinna codo</h1>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})