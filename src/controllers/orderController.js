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

module.exports = {
    addItem,
    getOrder
}