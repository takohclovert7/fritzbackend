require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')// express app
const app = express()
const cors = require('cors');
const morgan = require('morgan');
// middleware
app.use(express.json())

// Use the cors middleware
app.use(cors());
// Use morgan middleware for logging
app.use(morgan('combined')); // You can use 'tiny', 'dev', 'common', etc., depending on your preference

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

const url = 'mongodb+srv://brandoskijunior70:brandoskijunior70@cluster0.6fnul2f.mongodb.net/junior?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect( url, {
  useNewUrlParser: true, 
  useUnifiedtopology:true,

}).then(function(){
  console.log('db connection successful an am listening for request now');
  app.listen(4000,() => {
          console.log('listening for requests on port', 4000)
        })
}).catch(function(err){
 console.log(err.message)
});

