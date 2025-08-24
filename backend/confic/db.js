import mongoose from "mongoose"

export const dBConnection = async() =>{
    await mongoose.connect(`${process.env.MONGOODB_URL}/medical`).then(()=>console.log("DB connected"))
}
