// first require the mongdb path and then the database name and then the collection name

const products = require("../data/mongoDb").db('store').collection('products');

const ObjectId = require('mongodb').ObjectId;

// create
const create = async ({ name, description, quantity, price }) => {    
    const result = await products.insertOne({ name, description, quantity, price });    

    // returns the inserted data
    return result.insertedId;
}

// get all
const getAll = async () => {
    const result = await products.find();
    return result.toArray();
}

// get by Id
const getById = async (id) => {
    return await products.findOne({ _id: ObjectId(id)});    
}

// update
const update = async (id, { name, description, quantity, price }) => {
    const result = await products.replaceOne({ _id: ObjectId(id)} , { name, description, quantity, price } );
    return result.modifiedCount; 
}

// delete
const remove = async (id) => {
    var result = await products.deleteOne({_id: ObjectId(id)});
    return result.deletedCount;
}

module.exports = { getAll, getById, update, create, remove }; 