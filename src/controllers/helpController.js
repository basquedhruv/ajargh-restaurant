const helpDetails = (req, res)=>{
    console.loh("Hit the path");
    return res.status(200).send({
        msg:"Successfully hitting the help API",
        
    })
}

module.exports = {
    helpDetails
}