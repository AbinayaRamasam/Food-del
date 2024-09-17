import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

//Image storage engine for multer



const storage = multer.diskStorage(

    {

    destination: "uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }

})

//middleware upload is created here
const upload = multer({storage:storage})

//use this upload middleware in foodRouter.post

foodRouter.post("/add", upload.single("image"),addFood);
foodRouter.get("/list", listFood)
foodRouter.post("/remove",removeFood)



export default foodRouter;