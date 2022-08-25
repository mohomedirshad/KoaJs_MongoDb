const {MongoClient} =  require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to mongoDb");
})

module.exports = client;