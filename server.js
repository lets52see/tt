const express = require('express');
const dotenv = require('dotenv');//separate secret from source code
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');//in built in node

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT 

// log requests(method, time) on console
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser(serialise data and access using body property )
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine to ejs(html, pug also exist )
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs")) //if ejs files are in diff folder?

// load assets using virtual path(shortening); /css = /assets/css
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});