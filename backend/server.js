const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());
console.log(process.env.MONGOOSE_URL)
console.log(process.env.DB_NAME)
const MONGOOSE_URL=process.env.MONGOOSE_URL;
const DB_NAME=process.env.DB_NAME;
mongoose.connect(MONGOOSE_URL+DB_NAME)
.then(() => console.log('Your Connexion To MongoDB Is Successful (❁´◡`❁)'))
.catch((err) => console.error('Could not connect to MongoDB', err));

const UserRoutes=require('./Routes/User');
app.use('/users',UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});