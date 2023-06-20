const fs = require("fs")
const bioData = {
    name: "Asad Raiyan",
    role: "Web developer",
    id: "123",
    age: "26",
    gender: "Male"
}
const jsonData = JSON.stringify(bioData)
fs.writeFileSync("new.json", jsonData)
const data = fs.readFileSync("new.json", "utf-8")
console.log(data)
const origData = JSON.parse(data)
console.log(origData)