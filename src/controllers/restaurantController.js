const crud = require('../service/crudService');
const Restaurant = require('../models/restaurant');

const create = async (req,res)=>{
    try{
        const restaurant = await crud.create(Restaurant,req.body);
        return res.status(200).json({msg:"Successfully added new restauconst restaurant item",success:true,data:restaurant });
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Something went wrong.",success:false});
    }
}
const destroy = async (req,res)=>{
    try{
        const restaurant = await crud.destroy(Restaurant,req.params.id);
        return res.status(200).json({msg:"Successfully added new restauconst restaurant item",success:true,data:restaurant});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Something went wrong.",success:false});
    }
}

const getAllFoodItems = async (req,res)=>{
    try{
        const restaurants = await Restaurant.findById(req,params.id).populate('food')
        return res.status(200).json({
            msg:"Successfully deleted a restaurant.",
            success:true,
            data:restaurants
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"Something went wrong.",
            success:false
        })
    }
} 


module.exports = {
    create,
    getAllFoodItems,
    destroy
}