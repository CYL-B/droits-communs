var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(DATABASE_URL, 
    options,         
    function(err) {
       console.log(err);
    }
);

