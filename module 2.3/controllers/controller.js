const { transfer } = require("../service/service.js");

function transaction(req,res){
    try {
    const { sourceAccount, destinationAccount, amount } = req.body;
    if(!sourceAccount || !destinationAccount || !amount) {
        throw new Error("Insufficient Parameter")
    }
        result = transfer(sourceAccount, destinationAccount, amount);
        res.status(201).json({ message: "Transaction created successfully", result });
    } catch(e) {
    //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({error: e.message})
    }
};

module.exports = { transaction };