console.log('Countdown Quad Test')

const EventEmitter = require('events')
const CountdownQuad = require('../countdown.js')

var emitter = new EventEmitter()
var countQ = new CountdownQuad(emitter)

var server = new Server(config.file_path)
var serv = server.server

var socket = new Socket(emitter, serv)

emitter.on('tick',(d)=>{
    console.log('tick', d)
})

emitter.on('tick-final',(d)=>{
    console.log('tick-final', d)
})


countQ.start(4, 8, 3)
