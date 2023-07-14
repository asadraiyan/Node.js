const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("connected with mongodb")
})
.catch((error)=>{
    console.log("no connection")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

app.get("/", (req, res) => {
  res.send("This is a home page");
});

const Product = new mongoose.model("Product", productSchema);

// create product
app.post("/api/product/new", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

// read product 
app.get("/api/products", async (req,res)=>{
  const readProduct = await Product.find()
  res.status(200).json({success:true, readProduct})
})


// update product
app.put("/api/products/:id", async (req,res)=>{
  let updateProduct = await Product.findById(req.params.id)
  if(!updateProduct){
    return res.status(500).json({
      success : false,
      message : "product not found"
    })
  }
  updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new : true,
    useFindAndModify: false,
    runValidators : true
  })
  res.status(200).json({success:true, updateProduct})

})


//delete product
app.delete("/api/products/:id", async (req,res)=>{
  const deleteProduct = await Product.findById(req.params.id)
  if(!deleteProduct){
    return res.status(500).json({
      success : false,
      message : "product not found"
    })
  }
  await deleteProduct.deleteOne();
  res.status(200).json({
    success : true,
    message : "Product is deleted successfully"
  })

})

app.listen(5000, () => {
  console.log("listening at port 5000");
});
