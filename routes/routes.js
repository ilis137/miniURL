const { shortURL } = require("../models/models.js")
var validUrl = require('valid-url');
const shortid = require("shortid")
module.exports = (app) => {
    app.use(require("body-parser").urlencoded({ extended: true }))

    app.get("/new/:URLToShorten(*)", (req, res) => {
        const url = req.params.URLToShorten;

        if (validUrl.isUri(url)) {
            console.log(shortid.generate())
                // const data = new shortURL({
                //     originalURL: url,
                //     shortURL: shortid.generate()
                // })

        } else {
            console.log("invalid URL")
        }



    })
}