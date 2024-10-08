const express=require("express");
const connectDB= require("./config/db");
const bodyParser=require("body-parser");//importing the body parser to handle json bodies
const recipeRoutes = require("./routes/recipeRoutes");

//Initialization environment variables
require("dotenv").config();//It will load the the environment variable from the .env file

const app=express();

//Middleware to Parse the JSON
app.use(express.json()); 


//connect to the mongoDB database
connectDB();

//routes
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 6500 ;

app.listen(PORT, () =>{
    console.log(`server is running at the url http://localhost:${PORT}`)
})

