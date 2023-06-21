const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("<h1>This is home page <h1/>")
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
app.get("/json", (req, res) => {
    res.send({
        name: "Asad Raiyan",
        role: "Web developer",
        id: "123",
        age: "26",
        gender: "Male"
    })
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})