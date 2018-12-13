
module.exports={

    getAllShoes: (req, res)=>{
        req.app.get("db").getshoes().then(response=>{
            // console.log("response", response)
            res.status(200).json(response)
        }).catch(error=>{console.log("Error in Controller Get", error);
    });  
},
    postAlloftheShoes:(req,res)=>{
        const{name,price,image} = req.body;
        req.app.get("db").posttheshoes({
            name,
            price,
            image
        }).then(response=>{
            // console.log("response", response)
            res.status(200).json(response[0])
            // console.log("response", response[0])
        }).catch(error=>{console.log("Error in Controller Post", error);
    });  
},

    deletetheShoe: (req,res)=>{
        const{id}= req.params;
        req.app.get("db").deleteShoe({
            id
        }).then(shoe=>{
            res.json(shoe);
        }).catch(error=>{console.log("Error in Controller Delete", error);
    });   
    
    }






}