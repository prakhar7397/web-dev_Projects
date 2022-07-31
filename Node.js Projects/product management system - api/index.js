const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((req,res)=>{

    let products= JSON.parse(fs.readFileSync("./products.json",{encoding:"utf-8"}));

    let parsedUrl=url.parse(req.url,true);

    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"DELETE,POST,PUT",
        "Access-Control-Allow-Headers":"*"
    })

    // ............OPTIONS REQUEST............

    if(req.method==="OPTIONS"){
        res.end();
    }
    
    // ..............GET REQUEST API..............

    else if(req.method==="GET" && parsedUrl.pathname==="/products"){

        let id=parsedUrl.query.id;

        if(id===undefined){
            res.write(JSON.stringify(products));
            res.end();  
        }
        else{
            let product=products.find((product,index)=>{
                return Number(id)===Number(product.id);
            })

            if(product===undefined){
                res.write(JSON.stringify({message:"enter valid product id"}));
                res.end();
            }
            else{
                res.write(JSON.stringify(products));
                res.end();
            }
        }

    }

    // ..............POST REQUEST API..............

    else if(req.method==="POST" && parsedUrl.pathname==="/products"){

        let data="";

        req.on("data",(chunk)=>{
            data+=chunk;
        })

        req.on("end",()=>{

            let dataToAdd=JSON.parse(data);
            products.push(dataToAdd);
            fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
                if(err===null){
                    res.write(JSON.stringify({message:"product added successfully",success:true}));
                    res.end();
                }
                else{
                    res.write(JSON.stringify({message:"some problem in adding product",success:false}));
                    res.end();
                }
            })
            
        })

    }

    // ..............PUT REQUEST API..............

    else if(req.method==="PUT" && parsedUrl.pathname==="/products"){

        let id=parsedUrl.query.id;
        
        if(id===undefined){
            res.write(JSON.stringify({message:"provide a product id to update",success:false}));
            res.end();
        }
        else{
            let data="";
            req.on("data",(chunk)=>{
                data+=chunk;
            })
            req.on("end",()=>{
                let indexToUpdate=products.findIndex((product,index)=>{
                    return Number(id)===Number(product.id);
                })
                if(indexToUpdate!==-1){
                    products[indexToUpdate]=JSON.parse(data);
                    fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
                        if(err===null){
                            res.write(JSON.stringify({message:"product updated successfully",success:true}));
                            res.end();
                        }
                        else{
                            res.write(JSON.stringify({message:"some problem in updating",success:false}));
                            res.end();
                        }
                    })
                }
                else{
                    res.write(JSON.stringify({message:"invalid product id",success:false}));
                    res.end();
                }
            })
            
        }

    }

    // ..............PATCH REQUEST API..............
    
    else if(req.method==="PATCH"){

        res.write("PATCH request incoming");
        res.end();

    }

    // ..............DELETE REQUEST API..............

    else if(req.method==="DELETE" && parsedUrl.pathname==="/products"){

        let id=parsedUrl.query.id;

        if(id!==undefined){
            let indexToDelete=products.findIndex((product,index)=>{
                return Number(product.id)===Number(id);
            })
            if(indexToDelete===-1){
                res.write(JSON.stringify({message:"enter a valid product id to delete",success:false}));
                res.end();
            }
            else{
                products.splice(indexToDelete,1);
                fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
                    if(err===null){
                        res.write(JSON.stringify({message:"product deleted successfully",success:true}));
                        res.end();
                    }
                    else{
                        res.write(JSON.stringify({message:"some problem in deleting",success:false}));
                        res.end();
                    }
                })
            }
        }
        else{
            res.write(JSON.stringify({message:"enter the product id to delete the product",success:false}));
            res.end();
        }
        
    }

    else{
        res.write(JSON.stringify({message:"404 not found",success:false}));
        res.end();
    }

}).listen(8000,()=>{
    console.log("server is up and running");
})



// [
//     {"id":1,"name":"blackberry","price":20000,"quantity":10},
//     {"id":2,"name":"oneplus","price":48000,"quantity":20},
//     {"id":3,"name":"micromax","price":14000,"quantity":30},
//     {"id":4,"name":"iphone","price":70000,"quantity":40},
//     {"id":5,"name":"samsung","price":25000,"quantity":50}
// ]



