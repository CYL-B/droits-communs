var mongoose = require("mongoose");


var contactSchema = mongoose.Schema({
nom : String,
address : String,
categoryId: {type: mongoose.Schema.Types.ObjectId, ref:'categories' },
latitude : String,
longitude : String,
number : Number,
desc : String
})

var ContactModel = mongoose.model("contacts", contactSchema);

module.exports = ContactModel;