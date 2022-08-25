const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const productRoutes = require('./router/product.router'); 

const app = new Koa();

app.use(bodyParser());

app.use(productRoutes.routes()).use(productRoutes.allowedMethods());

app.listen(3000);

console.log("app is running on port 3000");