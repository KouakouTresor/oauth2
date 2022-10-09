const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send({name: "Enrico", age: 28})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("connected to the port 4000")
})