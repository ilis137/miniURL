const express = require("express")
const mongoose = require("mongoose")
const URLshortner = require("./routes/routes.js")
const app = express()
const PORT = process.env.PORT || 3000
var MONGO_DB = process.env.MONGO_DB;


mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/ShortURL", { useNewUrlParser: true })

URLshortner(app)


app.listen(PORT)