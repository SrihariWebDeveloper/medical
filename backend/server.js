import express from "express";
import cors from "cors";
import { dBConnection } from "./confic/db.js";
import MedicenRoute from "./routes/medicen_routes.js";
import 'dotenv/config'

//confic
const app = express();
const port = process.env.PORT || 3000;

//midelwares
app.use(express.json())
app.use(cors())

//DB connections
dBConnection()

//medicen routers
app.use("/api/medicen",MedicenRoute)
app.use("/images",express.static("uplods"))


app.get('/',(req,res)=>{
    res.send("server started")
})

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})
