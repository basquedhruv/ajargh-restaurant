const OrderService = require('../service/orderServices')

const addItem = async (req, res)=>{
    try{
        const order = await OrderService.createOrder(req.body);
        return res.status(200).json({
            success:true,
            msg:"Item added successfully",
            data:order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            msg:"Something went wrong."
        })
    }
}

const getOrder = async (req, res)=>{
    try{
        const order = await OrderService.getOrder(req.params.id);
        return res.status(200).json({
            success:true,
            msg:"Order returned.",
            data:order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            msg:"Something went wrong."
        })
    }
}

const orderTotal = async (req,res)=>{
    try{
        const price = await OrderService.totalPrice(req.params.id);
        return res.status(200).json({
            success:true,
            msg:"Price returned.",
            data:price
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            msg:"Something went wrong."
        })
    }
}

const updateOrder = async (req,res)=>{
    try{
        const order = await OrderService.updateOrder(req.params.id,req.body);
        return res.status(200).json({
            success:true,
            msg:"Order updated.",
            data:order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            msg:"Something went wrong."
        })
    }
}

const deleteItemFromOrder = async (req,res)=>{
    try{
        const order = await OrderService.deleteItemFromOrder(req.body);
        return res.status(200).json({
            success:true,
            msg:"Order updated.",
            data:order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            msg:"Something went wrong."
        })
    }
}
module.exports = {
    addItem,
    getOrder,
    orderTotal,
    updateOrder,
    deleteItemFromOrder
}