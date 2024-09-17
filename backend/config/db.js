import mongoose  from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abinaya:1515151515@cluster0.mvdmvke.mongodb.net/food-del').then(() => console.log("DB Connected"));
}