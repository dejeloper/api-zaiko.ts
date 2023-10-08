import "dotenv/config"
import express from 'express';
import cors from "cors";
import routerApi from "./api";

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get("/", (_req, res) => {
    console.log("Hola")
    const message = "Hola mundo"
    res.send(message)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})