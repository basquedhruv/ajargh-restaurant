const Order = require('../models/order');
const Restaurant = require('../models/restaurant')
const Food = require('../models/food');

const createOrder = async (data) => {
    try {
        const restaurant = await Restaurant.findById(data.restaurant);
        let order;
        if (data.order) {
            order = await Order.findById(data.order);
            if (order.status != 'Cart') {
                console.log("Order can't be modified.");
                return
            }
        } else {

            const order = await new Order({ user: data.user, status: "Cart" });
        }
        restaurant.food.forEach((foodItem, index) => {
            if (foodItem._id == data.food) {
                order.food.push(foodItem);
            }
        })
        order.save();
        return order;
    } catch (err) {
        console.log(err);
    }
}

const getOrder = async (id) =>{
    try{
        const order = await Order.findById(id).populate('food');
        return order;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    createOrder,
    getOrder
}