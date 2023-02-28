import { Router } from "express";
import ToyController from "../controlers/toys.controller.js";

const router = Router();

router.get('/', (req,res)=>{
    const data = ToyController.getAll()
    res.json(data)
})

router.post('/', (req,res)=>{
    const { body } = req

    const result = ToyController.create(body)

    res.json({
        status: 'success',
        date: body
    })
})

export default router