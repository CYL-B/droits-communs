import {REACT_APP_DB} from "@env"
var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(REACT_APP_DB, 
    options,         
    function(err) {
       console.log(err);
    }
);