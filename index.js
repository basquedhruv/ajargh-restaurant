const express = require('express');
const { connect } = require("./src/config/database");
const bodyParser = require('body-parser');
const passport = require('passport');
const apiRouter = require('./src/routes/index');
const authRouter = require('./src/routes/authRoutes');
require('./src/utils/auth')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/',authRouter)
app.use("/api", passport.authenticate('jwt', { session: false }), apiRouter);

app.use(function (err,req,res,next){
    res.status(err.status || 500),
    res.json({
        success:false,
        error:err
    });
})

app.listen(3001, async () => {
    
    console.log("Running...");
    await connect();
    console.log("Mongo db connected successfully.")
    console.log("Server started successfully.");
    

})


