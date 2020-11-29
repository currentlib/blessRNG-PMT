const express = require('express')
const socketio = require('socket.io')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json()) 


app.get('/', (req, res)=> {
    res.render('index')
})

let bpm = 60

app.post("/data", function(req, res) {
    res.send(req.body)
    bpm = req.body.rate
})

app.get("/getbpm", function(req, res) {
    res.send({rate: bpm})
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("server is running")
})