const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });     // Connecting to a new database if not already exists.

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Why No NAME?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10                                         // Validation in Mongoose.
    },
    review: String
});                                                     // Creating a new Schema (Table Structure)

const Fruit = mongoose.model("Fruit", fruitSchema);     // Creating new table

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Can be Better!"
// });                                                     // Creating new data entry in the table.

// fruit.save();                                           // Saving the entry into the table.

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "John",
//     age: 37
// });

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The Best!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Next to Best!"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 6,
//     review: "Nice!"
// });

// const mango = new Fruit({
//     name: "Peaches",
//     rating: 10,                                     // Will give Fruit validation failed as rating must be between 1 to 10 according to validation.
//     review: "Seasonal Fruit!"
// });

// Fruit.insertMany([mango]);

// Fruit.insertMany([kiwi, orange, banana]);                                                            // To insert multiple items/entries in one go.

// insertMany(array of things to be inserted into DB);

// run().catch(error => console.log(error.stack));

// async function run() {                                                                      // To read data using mongoose and nodejs, using await function.
//     const fruits = await Fruit.find();

//     fruits.forEach(function(fruit) {
//         console.log(fruit.name);
//     });

//     mongoose.connection.close();                                        // To cloe the mongoose connection which was started / opened earlier.
// }

// // Update Values in Mangoose through NodeJS.

// update().catch();

// async function update() {
//     await Fruit.updateOne({_id: "64520159389ea800ad712e5d"}, {name: "Mango"});
//     console.log("Successfully Done.");
//     mongoose.connection.close();
// }

// // Delete Values in Mongoose through NodeJS.

// deleteData().catch();

// async function deleteData() {
//     await Fruit.deleteOne({_id: "645a41e096f29125dfd84b12"});
//     console.log("Successfully Done.");
//     mongoose.connection.close();
// }

// Establishing relationships between more than 2 documents

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Amazing!"
});

const peaches = new Fruit({
    name: "Peaches",
    rating: 5,
    review: "Can be good!"
});

const grapes = new Fruit({
    name: "Grapes",
    rating: 7,
    review: "Fantastic Taste!"
});

// Fruit.insertMany([pineapple, peaches, grapes]);

const personSchema = new mongoose.Schema( {
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

// person.save();

updateRef().catch();

async function updateRef() {
    await Person.updateOne({name: "John"}, {favouriteFruit: grapes});
}