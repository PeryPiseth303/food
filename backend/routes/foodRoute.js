import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'
import fs from 'fs'

const foodRouter = express.Router();

//image store engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
    return cb(null,`${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})

// the route end point
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)



export default foodRouter