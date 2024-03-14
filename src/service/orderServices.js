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
                return order
            }
        } else {

            order = await new Order({ user: data.user, status: "Cart" });
        }
        restaurant.food.forEach((foodItem) => {
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

const getOrder = async (id) => {
    try {
        const order = await Order.findById(id).populate('food');
        return order;
    } catch (err) {
        console.log(err);
    }
}

const totalPrice = async (id) => {
    try {
        const order = await Order.findById(id).populate('food');
        let totalPrice = 0;

        order.food.forEach((foodItem) => {
            totalPrice += foodItem.price;
        })
        return totalPrice;
    } catch (err) {
        console.log(err);
    }
}

const updateOrder = async (id, data) => {
    try {
        const order = await Order.findById(id);
        order.status = data.status;
        order.save();
        return order;
    } catch (err) {
        console.log(err)
    }
}

const deleteItemFromOrder = async (data) => {
    try {
        const order = await Order.findById(data.id)
        order.food.forEach((foodItem, index, Object) => {
            if (foodItem._id == data.food) {
                Object.splice(index, 1);
            }
        })
        order.save();
        return order;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createOrder,
    getOrder,
    totalPrice,
    updateOrder,
    deleteItemFromOrder
}

