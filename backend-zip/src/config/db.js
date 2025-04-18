// const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://aditirauthan655:<BZOKULrtllgd9yp7>@cluster0.upxcwxt.mongodb.net/'
// const connectDb=()=>{
//     return mongoose.connect(mongoDbUrl)
// }

// module.exports={connectDb}

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
module.exports = connectDB;