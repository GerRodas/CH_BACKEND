import { Router} from "express";
import pokeModel from "../modules/pokemon.model.js";

const router = Router()


router.get('/', async(req,res)=>{
    const pokemons = await pokeModel.find()
    res.render("index", {})
})

router.get('/:name',(req,res)=>{
    res.render('one',{})
})

export default router