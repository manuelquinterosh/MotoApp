const mongoose = require('mongoose');

const { MOTO_APP_MONGODB_HOST, MOTO_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${MOTO_APP_MONGODB_HOST}/${MOTO_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('Database is connected', db.connection.host))
.catch(err => console.error(err));