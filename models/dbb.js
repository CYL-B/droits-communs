var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://Camdev:E16Rrx0HRym5TVCY@cluster0.d5pln.mongodb.net/Common_laws?retryWrites=true&w=majority', 
    options,         
    function(err) {
       console.log(err);
    }
);