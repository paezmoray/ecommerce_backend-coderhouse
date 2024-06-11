import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

const app = express();
const puerto = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});