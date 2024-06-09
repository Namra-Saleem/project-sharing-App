const mongoose = require("mongoose")

async function dbconnect() {
    mongoose.connect("mongodb+srv://Namra:Namra123@atlascluster.gaoymyr.mongodb.net/PROJECT SHARING APP")
}
module.exports = dbconnect