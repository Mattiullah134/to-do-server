const mongoose = require('mongoose');
const connectionToMongoose = async () => {

    await mongoose.connect(process.env.MONGOO_URI);
    console.log('connection to the mongoose is successfully');
}
module.exports = connectionToMongoose