const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://****************.6svtk.mongodb.net/petshop"

async function main() {
    await mongoose.connect(mongoDB);

}
main().then(()=> console.log("Conectado ao MongoDB")).catch((err) => console.log(err))

module.exports = mongoose
