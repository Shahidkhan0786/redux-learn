const express = require("express");
const app = express();
const PORT = 8000


app.use(express.urlencoded())
app.use(express.json())


app.get("/",(req,res)=>{
    return res.json({
        message:"okk"
    })
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})