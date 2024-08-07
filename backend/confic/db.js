import mongoose from "mongoose"

export const dBConnection = async() =>{
    await mongoose.connect('mongodb+srv://srihariDev:Srihari07@cluster0.rmhhhrk.mongodb.net/medical').then(()=>console.log("DB connected"))
}
