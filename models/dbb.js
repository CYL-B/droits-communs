var mongoose = require('mongoose');

var password = process.env.REACT_APP_PASSWORD
var user = process.env.REACT_APP_USER

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.d5pln.mongodb.net/Common_laws?retryWrites=true&w=majority`, 
    options,         
    function(err) {
       console.log(err);
    }
);

