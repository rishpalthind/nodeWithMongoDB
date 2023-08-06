const express = require('express');
const { ServerConfig, database } = require('./config');

const apiRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try {
        await database.connect();
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
    

});