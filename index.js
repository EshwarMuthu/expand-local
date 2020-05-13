const express=require("express")
const fetch=require("node-fetch")
// const input=require("./inputFromCLI")

const app=express()
app.set("views","./views")
app.set("view engine","pug")
const baseURL="https://api.stackexchange.com/2.2"

app.get("/",(req,res)=>{
    // console.log("Enter userID: ")
    // input.inpCLI()
    res.render("index",{usingPug:true})
})
app.get("/getUserData",(req,res)=>{
    var userID=req.query.userID
    var url=baseURL+"/users/"+userID+"/badges?site=stackoverflow"
    console.log(url)
    fetch(url).then(resp=>resp.json())
    .then(data=>{
        console.log(data.items[0].user.display_name)
        res.send(data.items[0].user.display_name)
    })
})
app.listen(8080)