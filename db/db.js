//Requires mongoose into the app
const mongoose = require('mongoose');
//Stores our database address
const connectionString = 'mongodb://localhost/movie';

//Gets our server connected, and addresses any demarcations as indicated by the folks at Mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
});

//Listening to make sure we are 'connected', if so, logs in console
mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${connectionString}`);
});

//Listening to see if we are 'disconnected'
mongoose.connection.on('disconnected', () => {
 console.log(`Mongoose is disconnected`);
});

//Listening to see if we are experiencing an error
mongoose.connection.on('error', (err) => {
 console.log(err, `mongoose error`);
});