
import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item (it is a controller function)

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

//new foodModel is a method in model to add datas in db;    

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })

 try {
    await food.save();
    res.json({success:true,message:"FoodAdded"})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
 }
};

//all food list 
const listFood = async (req,res) => {


// foodModel.find({} = we use find method in foodModel to retrieve documents in foodModel and {} = all food items)
   try {
      const foods = await foodModel.find({});
      res.json({success:true,data:foods})
   } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
   }

}
//remove food item
const removeFood = async (req,res) =>{
   try {
      const food = await foodModel.findById(req.body.id)
      fs.unlink(`uploads/${food.image}` , ()=>{})

      await foodModel.findByIdAndDelete(req.body.id)
      res.json({success:true,message:"Food Removed"})
   } catch (error) {

      console.log(error);
      res.json({success:false,message:"Error"})
   }
}

export  {addFood,listFood,removeFood};