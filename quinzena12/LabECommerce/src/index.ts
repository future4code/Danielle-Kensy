import { app } from "./app";
import { GetAllUsers } from "./endpoints/getAllUsers";
import { GetAllProducts } from "./endpoints/getAllProducts";
import { GetPurchases } from "./endpoints/getAllPurchases";
import { CreateUsers } from "./endpoints/createUsers";
import { CreateProducts } from "./endpoints/createProducts";
import { PurchaseRegister } from "./endpoints/purchasesRegister";

//endpoist - pega todos os usuários
app.get("/users", GetAllUsers)

//endpoist - pega todos os produtos
app.get("/products", GetAllProducts)

//endpoist - Buscar as compras de um usuário
app.get("/users/:user_id/purchases", GetPurchases)

//endpoint - cria usuário
app.post("/users", CreateUsers)

//endpoint - cria produto
app.post("/products", CreateProducts)

//endpoint - registrar compra
app.post("/purchases", PurchaseRegister)