const express = require("express")
const app = express()
const Mongoose = require("mongoose")
app.use(express.json())













//Connect to DB and start the app on port:3000
Mongoose.connect("mongodb://localhost:27017/questions_and_answers").then(() => {
    console.log("MongoDB connection established!");
    app.listen(3001, ()=> {
        console.log("Backend running on port: 3001!");
    })
}).catch((error) => {
    console.log("Attempt to connect to MongoDB FAILED!");
    console.log(error);
})
