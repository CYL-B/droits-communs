var mongoose = require('mongoose');

const REACT_APP_USER = process.env.REACT_APP_USER;
const REACT_APP_PASSWORD = process.env.REACT_APP_PASSWORD;

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(`mongodb+srv://${REACT_APP_USER}:${REACT_APP_PASSWORD}@cluster0.d5pln.mongodb.net/Common_laws?retryWrites=true&w=majority`, 
    options,         
    function(err) {
       console.log(err);
    }
);

