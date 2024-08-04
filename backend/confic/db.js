import mongoose from "mongoose"

export const dBConnection = async() =>{
    await mongoose.connect('mongodb://localhost:27017/medical').then(()=>console.log("DB connected"))
}
