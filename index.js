
// ES6 notation to import the express module from the express package we downloaded already
import express from "express";
// define a variable "app" which is the express object used to config/run server. this is an instance of the express application. used to define routes, middleware as well.
const app = express()
//define variable port and set the number that port will listen on for requests
const port = 3000
// app is the route handler, get is the type of request it handles, / is the root URL which is the target of those get requests
// arrwo function taking 2 inputs, req is request object, i.e.request over http. res is response object, response over http
app.get('/', (req, res) => {
  // response that sends the string ("whatever message you want") as the responseto the client when the GET request comes in. this is content of fucntion
    res.send('Hello World!')
})
//starts the server and listens for connections on the port specified , e.g. 3000
app.listen(port, () => {
//callback function executed when server starts listening, e.g. log a console message to let you know app is listenning on the specified port number
  console.log(`Example app listening on port ${port}`)
})