const express = require("express")
const app = express()
const port = 8000
const path = require("path")

const staticPath = path.join(__dirname, "./static")

app.use(express.static(staticPath))   //for serving html files 

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})