//mongoose is module to connect express with mongo Db
//Schema is the structure that we follow when enter data in the db 
// s is added itself in the collection name

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    brand: {
        required: true,
        type: String,
    },
    quantity: {
        required: true,
        type: Number,
    }
});

module.exports = mongoose.model("Product",dataSchema);

// localhost:8080/api/postData

// {
//     "name":"Kia",
//     "brand":"Sonet",
//     "quantity":"1000"
// }
