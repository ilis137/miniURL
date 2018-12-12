var mongoose = require("mongoose")

var shortURL = mongoose.model("url", {
    orignalURL: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    shortURL: {
        type: String
    }

})

module.exports = { shortURL }