const mongoose = require('mongoose');
const { MONGO_DB_URL } = require("./server-config");

module.exports = {
    connect: async () => {
        await mongoose.connect(MONGO_DB_URL);
    }  
}