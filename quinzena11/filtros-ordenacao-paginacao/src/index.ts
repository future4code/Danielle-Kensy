import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersQuery } from "./endpoints/getAllUsersQuery";
import { getAllUsersPath } from "./endpoints/getAllUsersPath";
import { getAllUsersOrder } from "./endpoints/getAllUsersOrder";

app.get("/getAllUsers", getAllUsers)

app.get("/getAllUsersQuery", getAllUsersQuery)

app.get("/getAllUsersPath/:tipo", getAllUsersPath)

app.get("/getAllUsersOrder", getAllUsersOrder)