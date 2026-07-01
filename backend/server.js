

import express from "express"
import cors from "cors"
import { conncetDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())


//db connection
conncetDb()

//api endpoint
app.use("/api/food", foodRouter)
app.use("/image", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(port, () => {
    console.log(`server http://localhost:${port}`)
})




// mongodb://foodDelivery:foodDelivery123@ac-ll5vijt-shard-00-00.brq5tii.mongodb.net:2701
// 7,ac-ll5vijt-shard-00-01.brq5tii.mongodb.net:27017,ac-ll5vijt-shard-00-02.brq5tii.
// mongodb.net:27017/?ssl=true&replicaSet=atlas-swd3yu-shard-0&authSource=admin&appName=