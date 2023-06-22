const express = require("express")
const app = express()
const port = 8000
const path = require("path")

const staticPath = path.join(__dirname, "./static")

// to set the view engine

app.set("view engine", "hbs")

// template engine route

app.get("/", (req, res) => {
    res.render("index", {
        name: "Asad Raiyan"
    })
})

// app.use(express.static(staticPath))   //for serving html files 

app.get("/", (req, res) => {
    res.send("hello from the express page")
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})