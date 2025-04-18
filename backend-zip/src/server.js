const { app } = require(".");
const connectDB = require("./config/db");

const PORT=5454;
connectDB();
app.listen(PORT, ()=>{
    console.log("ecommerce api listing on port ",PORT)
})