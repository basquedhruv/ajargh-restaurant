const helpDetails = (req, res)=>{
    console.loh("Hit the path");
    return res.status(200).send({
        msg:"Successfully hitting the help API",
        data:{
            contact:"+917735648011"
        }
    })
}

module.exports = {
    helpDetails
}