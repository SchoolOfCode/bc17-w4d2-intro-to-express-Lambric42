
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

// am i correct in thinking i could do this by making a JSON object {
// "message": "hello world"; would i need to define that JSON object in the server or could i pull it from another file?
// and multiple request handlers, if i defined app.get ("/orders", req res) icould have a list of orders as JSON objects inside an array. which you could make a get request to return the contents of the object?
// could i do a app.post ("/orders", req res) to allow a user to send orders to the API?

// import express from 'express';

// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Route to send a JSON response with a message
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello World' });
// });

// // Route to get a list of orders
// app.get('/orders', (req, res) => {
//   const orders = [
//     { id: 1, item: 'Coffee', quantity: 2 },
//     { id: 2, item: 'Tea', quantity: 1 },
//     { id: 3, item: 'Sandwich', quantity: 3 }
//   ];
//   res.json(orders);
// });

// // Route to handle POST requests to add a new order
// app.post('/orders', (req, res) => {
//   const newOrder = req.body;
//   console.log('Received new order:', newOrder);
//   // Here, you would typically add the new order to your database
//   res.status(201).json({ message: 'Order received', order: newOrder });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });