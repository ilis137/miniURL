const { shortURL } = require("../models/models.js")
var validUrl = require('valid-url');
const shortid = require("shortid")


module.exports = (app) => {

    app.use(require("body-parser").urlencoded({ extended: true }))


    app.get("/", (req, res) => {
        res.render("index.hbs")
    })
    app.get("/test", (req, res) => {

        console.log(req.body)


    })


    app.get("/new/:URLToShorten(*)", (req, res) => {
        const url = req.params.URLToShorten;

        if (validUrl.isUri(url)) {
            //            console.log(shortid.generate())
            const data = new shortURL({
                orignalURL: url,
                shortURL: shortid.generate()
            })

            data.save().then(doc => {
                console.log(doc)
                res.send(doc)
            }, e => {
                res.status(400).send({
                    orignalURL: "error saving into database",
                    shortURL: "invalid URL"
                })
            })

        } else {
            res.send({
                orignalURL: "url to shorten does not match standard fromat",
                shortURL: "invalid URL"
            })
        }



    })
    app.get("/:mini", (req, res) => {
        const miniUrl = req.params.mini
        shortURL.findOne({ shortURL: miniUrl }, "orignalURL").then(doc => {
            res.redirect(doc.orignalURL)
        }).catch(e => {
            res.status(404).send()
        })


    })


}