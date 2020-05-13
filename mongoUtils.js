const MongoClient = require("mongodb").MongoClient
var db;
function connectDBServer() {
    MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
        db = client.db("expand-db")
    })
}
function getDB() { return db }
module.exports.connectDBServer = connectDBServer
module.exports.getDB = getDB