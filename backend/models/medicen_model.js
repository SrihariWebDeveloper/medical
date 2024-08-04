import mongoose from "mongoose";

const MedicalSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    age1:{type:String},
    age2:{type:String},
    age3:{type:String}
})

const medicienModel = mongoose.models.food || mongoose.model("medicen",MedicalSchema);

export default medicienModel;