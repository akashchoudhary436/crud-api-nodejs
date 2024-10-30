const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const eventsRouter = require('./routes/events');


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
let db;


MongoClient.connect(mongoUri)
  .then(client => {
    db = client.db(); 
    console.log('Connected to Database');

    
    //events routes
    app.use('/api/v3/app', eventsRouter(db));


    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => console.error(error));
