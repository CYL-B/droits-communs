var mongoose = require('mongoose');

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

