require("./db/connection"); // runs connection file 
var cors = require('cors')
const express = require ("express")
const app  = express();
const port = process.env.PORT || 5001; // this will be needed later
const userRouter = require("./user/routes")
app.use(cors())
app.use(express.json()) // method .use  adds things to web server. (express.json()) use json files 
app.use("/user", userRouter)
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})