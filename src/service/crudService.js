const create = async (model,data)=>{
    try{
        const res = await new model(data).save();
        return res;
    }catch(err){
        console.log(err);
    }
}

const destroy = async (model,id)=>{
    try{
        const res = await model.findByIdAndDelete(id);
        return res;
    }catch(err){
        console.log(err);
    }
}

const update = async (model,id,data)=>{
    try{
        const res = await model.findByIdAndUpdate(id,data);
        return res;
    }catch(err){
        console.log(err);
    }
}

const getAll = async(model)=>{
    try{
        const res  = await model.find();
        return res;
    }catch(err){
        console.log(err);
    }
}

const getById = async (model,id)=>{
    try{
        const res = await model.findById(id);
        return res;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    create,
    destroy,
    update,
    getAll,
    getById
}

