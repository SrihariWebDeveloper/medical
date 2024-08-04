import { error } from "console";
import medicienModel from "../models/medicen_model.js";
import fs from 'fs'

//add medicens

const addMedicen = async (req, res) => {
    let image_fileName = `${req.file.filename}`;

    const Tablet = new medicienModel({
        name: req.body.name,
        category: req.body.category,
        image: image_fileName,
        age1: req.body.age1,
        age2: req.body.age2,
        age3: req.body.age3
    })
    try{
        await Tablet.save();
        res.json({success:true,message:"Medicen added"})
    }
    catch{
        console.log(error)
        res.json({success:false,message:"Error occured"})
    }
}
//List Medicen iteams
const ListMedicen = async (req,res) =>{
    try {
        const DBMedicen = await medicienModel.find({})
        res.json({success:true,Date:DBMedicen})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error Occured"})
    }
}
//remove medicens
const removeMedicen = async (req, res) => {
    try {
        //finding model
        const tabletId = await medicienModel.findById(req.body.id);
        //deleting image from uplods folder
        fs.unlink(`uplods/${tabletId.image}`,()=>{})
        //deleting the model from mongooDB
        await medicienModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Tablet Deleted"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error Occured"})
    }
}

export { addMedicen , ListMedicen , removeMedicen}