const express=require("express")
const fetch=require("node-fetch")
const bodyParser=require("body-parser")
const mongoutil=require("./mongoUtils")
// const input=require("./inputFromCLI")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set("views","./views")
app.set("view engine","pug")
mongoutil.connectDBServer()
const baseURL="https://api.stackexchange.com/2.2"

app.get("/",(req,res)=>{
    // console.log("Enter userID: ")
    // input.inpCLI()
    res.render("index",{usingPug:true})
})
app.get("/getUserData",(req,res)=>{
    var userURL=req.query.userURL
    var userID=userURL.split("/")[4]
    var db=mongoutil.getDB()
    db.collection("users").insertOne({userID:userID})
    var url=baseURL+"/users/"+userID+"/badges?site=stackoverflow"
    fetch(url).then(resp=>resp.json())
    .then(data=>{
        console.log(data.items[0].user.display_name)
        res.send(data.items[0].user.display_name)
    })
})
app.post("/save",(req,res)=>{
    // console.log(req.body)
    res.send("save")
})
app.listen(8080)