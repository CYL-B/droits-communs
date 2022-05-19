var mongoose = require('mongoose');

const REACT_APP_DB = process.env.REACT_APP_DB;
console.log(REACT_APP_DB)

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(`mongodb+srv://${REACT_APP_DB}`, 
    options,         
    function(err) {
       console.log(err);
    }
);

