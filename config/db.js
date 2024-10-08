const mongoose = require("mongoose");

//Function to connect to mongoDB

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully")
    }catch(error) {
          console.error("error in connecting the database",error)
    }
}

module.exports = connectDB; 