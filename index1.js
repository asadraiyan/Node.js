const fs = require("fs");
fs.writeFileSync("new.txt", "my name is asad raiyan") // to create file
fs.appendFileSync("new.txt", " and i am fine what about you") // to add some content in the file
const data = fs.readFileSync("bio.txt", "utf8") // to read the existing file
console.log(data)
fs.unlinkSync("bio.txt") // to delete the file
fs.appendFile("new.txt", "please like and subscribe my channel", (err) => { // to add more content in the file using async
    console.log("task is completed")
})