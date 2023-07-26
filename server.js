
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_DB_DSN;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, dbName: 'Exams23002' });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const quizRouter = require('./routes/quiz');

app.use('/', quizRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
