const express = require("express")
const path = require("path")

const app = express()
const port = 80;


// for serving static files
app.use("/static", express.static("static"))

// set the template engine as pug
app.set('view engine', 'pug')

// set the viewa directory
app.set("views", path.join(__dirname, "views"))

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Asad', message: 'Hello there! thanks to telling me how to use pug' })
})

app.get("/", (req, res) => {
    res.send("This is home page of my first express app")
})
app.get("/about", (req, res) => {
    res.send("This is about page of my first express app")
})
app.get("/contact", (req, res) => {
    res.send("This is contact page of my first express app")
})
app.post("/about", (req, res) => {
    res.send("This is post request of about page of my first express app")
})

app.listen(port, () => {
    console.log(`The application started succesfully on ${port}`)
})