const mongoose = require("mongoose");

// Connecting to mongoose server
mongoose.connect("mongodb://127.0.0.1:27017/sample", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected!");
}).catch((err) => {
    console.log(err);
});

// Creating Schema (Structure of Table)
const student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
});

// Creating model (Collection in Schema)
const Student = new mongoose.model("Student", student);

// Adding or inserting into database using async (asynchronized) function
const adder = async() => {
    
    // // To add data into the collection (Not recommended)
    // const testing = new Student({
    //     name: "Deep",
    //     age: 21
    // });
    // await ss.save();

    // To add data to the collection (Recommended)
    // One data
    const testing1 = await Student.create({
        name: "Testing",
        age: 2500000
    });
    // Many data
    const testing2 = await Student.insertMany([{name: "data1"}, {name: "data2"}]) // Array of objects to be passed as many

    // To read from the collection
    const testing3 = await Student.find();                                      // Shows full collection of data
    const testing4 = await Student.findOne({/* Condition */ name: "data1"});    // First value that matches the condition
    const testing5 = await Student.find({name: "data1"});                       // All values that matches the condition
    
    // To update data in the collection
    const testing6 = await Student.updateOne({/* Condition */ name: "data1"}, {$set: { /* Updated_Value */ name: "data" }});        // Update the first value thata matches the condition in the collection
    const testing7 = await Student.updateMany({name: "data1"}, {$set: {name: "data"}});                                             // Update all values that matches the condition in the collection

    // To delete data in the collection
    const testing8 = await Student.deleteOne({ /* Condition */ name: "data1"});     // Delete the first data that matches the condition from the collection
    const testing9 = await Student.deleteMany({name: "data1"});                     // Delete every data that matches the condition from the collection
    const testing10 = await Student.deleteMany({});                                 // Delete every data from the collection
}

// Calling the async function
adder();