const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (error) => {
    if (error) {
        console.log('Error occurred while connecting to the database: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected Successfully');
})

const productRouter = require("./Routes/product.route");
const userRouter = require("./Routes/user.route");

app.use("/product", productRouter);
app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

