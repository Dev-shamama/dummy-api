const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


app.get('/' , (req , res)=>{

   res.json({
    name: "shamama",
    email: "shamama@gmail.com",
    gender: "male",
    occupation: "web developer",
   })

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))