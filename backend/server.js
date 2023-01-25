const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')

mongoose.set("strictQuery", false);

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.post('/', (req, res) => { //Faire un POST des infos 
    res.send('POST request to the homepage')
  })
app.use(cors()); //Access to every port
app.listen(4000, console.log("Server 4000 up"));

