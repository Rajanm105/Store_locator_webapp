const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://admin:admin@demodb.jnxu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;