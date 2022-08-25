const Router = require('@koa/router');

const 
{ 
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct 
} = require('../api/product.api');

// define prefix of the router
const router = Router({
    prefix: '/products'
});

// get request
router.get('/', async ctx => {
    ctx.body = await getAllProducts();
});

//post request
router.post('/', async ctx => {    
    let product = ctx.request.body;
    product = await createProduct(product);

    ctx.response.status = 200;    
})

// get by id
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getProductById(id);
})

// delete
router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    if (id == null) {
        ctx.status = 400;
    }
    ctx.body = await deleteProduct(id);
    ctx.status = 204;
})

// put
router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let product = ctx.request.body;
    product = await updateProduct(id, product);

    ctx.response.status = 204;
})

module.exports = router;