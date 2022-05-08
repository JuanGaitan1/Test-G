const mongoose = require ('mongoose');

const itemsSchema = mongoose.Schema({
    name :{ type : String},
    waist :{ type : String},
    price :{ type : Number},
    name :{ type : String},
    image : {type : String}
})

module.exports = mongoose.model('Items' , itemsSchema);