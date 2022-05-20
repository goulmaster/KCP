const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rauan:rauan@kazcrypyopay.lgu35.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./user.model');