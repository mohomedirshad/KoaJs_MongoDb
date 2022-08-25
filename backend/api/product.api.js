const { create, getAll, getById, update, remove } = require('../model/product');

const createProduct = async ({name, description, quantity, price }) => {
    const product = {
        name,
        description,
        quantity,
        price
    }
    return await create(product);
}

const getAllProducts = async () => {
    return await getAll();
}

const updateProduct = async (id, {name, description, quantity, price }) => {
    return await update(id, {name, description, quantity, price });
}

const getProductById = async (id) => {
    return await getById(id);
}

const deleteProduct = async (id) => {
    return await remove(id);
}

module.exports = {
    createProduct, 
    deleteProduct,
    getAllProducts, 
    getProductById, 
    updateProduct
};