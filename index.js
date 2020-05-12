const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Expand!!")
})
app.get("/sample",(req,res)=>{
    res.send("sample")
})
app.listen(8080)