const express = require('express');
let app = express();
let port = 5000;
const useRouter = require('./useRoute')
const morgon = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')

//middlewares  theese should be at top json and cors
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(morgon('dev'))

//router connection
app.use('/api', useRouter)

//db connection
mongoose.connect('mongodb://localhost:27017/users',()=>{console.log('db is connected')})

//server connection
app.get('/', (req, res) => {
    res.send('hello world')
})

//port listening
app.listen(port, () => {
    console.log(`server is running in ${port}`)
})