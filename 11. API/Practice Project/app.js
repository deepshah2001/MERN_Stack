const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

const port = 4000;

mongoose.connect("mongodb://127.0.0.1:27017/products", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected!");
}).catch((err) => {
    console.log(err);
});

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Product = new mongoose.model("Product", productSchema);

// const adder = async() => {
//     await Product.create({
//         name: "Racket",
//         description: "A device used to play badminton.",
//         price: 599
//     });
// }

// adder();

// Create Product
app.post("/api/v1/product/new", async(req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
})

// Read Product
app.get("/api/v1/products", async(req, res) => {
    const product = await Product.find();

    res.status(200).json({
        success: true,
        product
    });
});

// Update Product
app.put("/api/v1/product/:id", async(req, res) => {
    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: "Requested Product Not Found!"
        });
    }

    // findByIdAndUpdate(id, new_updated_data_from_body, parameters)
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false, runValidators: true});

    res.status(200).json({
        success: true,
        product
    });
});

// Delete Product
app.delete("/api/v1/product/:id", async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: "Requested Product Not Found!"
        });
    }

    await Product.deleteOne({_id: req.params.id});

    res.status(200).json({
        success: true,
        message: "Product Successfully Deleted!"
    });
});

app.listen(port, () => {
    console.log(`Connected: http://localhost:${port}`);
})