const mongoose = require('mongoose');


async function connectToDatabase(){ //connection to the database
    try{
        await mongoose.connect(process.env.DATABASE_URL) // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

module.exports = connectToDatabase; //exporting the connectToDB function so that we can use it in other files
