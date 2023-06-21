const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("This is home page ")
})
app.get("/about", (req, res) => {
    res.status(200).send("This is about page ")
})
app.get("/services", (req, res) => {
    res.status(200).send("This is services page ")
})
app.get("/contact", (req, res) => {
    res.status(200).send("This is contact page ")
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})