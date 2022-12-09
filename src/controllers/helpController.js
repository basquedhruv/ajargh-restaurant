const helpDetails = (req, res)=>{
    console.loh("Hit the path");
    return res.status(200).send({
        msg:"Successfully hitting the help API",
        data:{
            contact:"+91 7735648011"
        }
    })
}

module.exports = {
    helpDetails
}