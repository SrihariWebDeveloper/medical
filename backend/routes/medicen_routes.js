import expres from "express"
import { addMedicen, ListMedicen, removeMedicen } from "../controlers/medicalControler.js"
import multer from "multer"

const MedicenRoute = expres.Router();

//image storage system
const storage = multer.diskStorage({
    destination:"uplods",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const uplod = multer({storage:storage})

MedicenRoute.post("/add",uplod.single("image"),addMedicen)
MedicenRoute.get("/list",ListMedicen)
MedicenRoute.post("/remove",removeMedicen)

export default MedicenRoute;