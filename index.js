
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //why?
const path = require('path')
const cors = require('cors')

const app = express();
const userRouter = require('./routes/users.route'); 

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); //middleware?
app.use(cors());


app.use('/api/users', userRouter); 

const port = process.env.PORT || 5000;
const uri =  'mongodb+srv://test:test@cluster0.txwkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('database connect')
});

app.listen(port, () => {
    console.log('app is running on port:' + port)
});

// app.listen(process.env.PORT || 5000, () => {
//     console.log(`application start at ${process.env.PORT || 5000}`)
// })


