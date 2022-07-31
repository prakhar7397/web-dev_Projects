let allproducts=[];

// Function to fetch the data from backend

function getData(){

    fetch("http://localhost:8000/products",{
        method:"GET"
    })
    .then((response)=>{
        return response.json();
    })
    .then((products)=>{

        allproducts=products;
        displayProducts(allproducts);

    })
    .catch((err)=>{
        console.log(err);
    })

}


// Initial call to fetch data

getData();


// Function to display the products

function displayProducts(products){

    document.getElementById("table_body").innerHTML="";

    products.forEach((product,index)=>{

        let row=document.createElement("tr");

        let noTD=document.createElement("td");
        noTD.append(index+1);
        row.appendChild(noTD);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);
        row.appendChild(nameTD);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);
        row.appendChild(priceTD);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);
        row.appendChild(quantityTD);

        let actionsTD=document.createElement("td");

        let updateIcon=document.createElement("i");
        updateIcon.className="fa-solid fa-file-pen text-success";
        updateIcon.addEventListener("click",function(){
            openUpdateForm(product.id)
        })

        let deleteIcon=document.createElement("i");
        deleteIcon.className="fa-solid fa-trash text-danger";
        deleteIcon.addEventListener("click",function(){
            deleteProduct(product.id);
        })

        actionsTD.appendChild(updateIcon);
        actionsTD.appendChild(deleteIcon);

        row.appendChild(actionsTD);

        document.getElementById("table_body").appendChild(row);

    })
}


// Function to delete a product

function deleteProduct(id){

    fetch("http://localhost:8000/products?id="+id,{
        method:"DELETE"
    })
    .then(response=>response.json())
    .then((msg)=>{

        if(msg.success===true){
            let indexToDelete=allproducts.findIndex((product,index)=>{
                return Number(product.id)===Number(id);
            })
            allproducts.splice(indexToDelete,1);
            displayProducts(allproducts);
            
            console.log(msg);
        }
        else{
            console.log(msg);
        }
    })
    .catch((err)=>{
        console.log(err);
    })

}


// Function to add/create a product

function createProduct(){

    let productToCreate={};

    productToCreate.id=Number(document.getElementById("id").value);
    productToCreate.name=document.getElementById("name").value;
    productToCreate.price=Number(document.getElementById("price").value);
    productToCreate.quantity=Number(document.getElementById("quantity").value);

    fetch("http://localhost:8000/products",{
        method:"POST",
        body:JSON.stringify(productToCreate),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response)=>response.json())
    .then((msg)=>{

        if(msg.success===true){
            console.log(msg);
            document.getElementById("id").value=null;
            document.getElementById("name").value=null;
            document.getElementById("price").value=null;
            document.getElementById("quantity").value=null;
            allproducts.push(productToCreate);
            displayProducts(allproducts);
        }
        else{
            console.log(msg);
        }

    })
    .catch((err)=>{
        console.log(err);
    })

}

let idToUpdate=null;

// Function to open update form

function openUpdateForm(id){

    document.getElementById("update_form").style.display="flex";

    let productToUpdate=allproducts.find((product,index)=>{
        return Number(product.id)===Number(id);
    })

    idToUpdate=productToUpdate.id;

    document.getElementById("upId").value=productToUpdate.id;
    document.getElementById("upName").value=productToUpdate.name;
    document.getElementById("upPrice").value=productToUpdate.price;
    document.getElementById("upQuantity").value=productToUpdate.quantity;

}


// Function to update the product

function updateProduct(){

    let updatedProduct={};
    updatedProduct.id=document.getElementById("upId").value;
    updatedProduct.name=document.getElementById("upName").value;
    updatedProduct.price=document.getElementById("upPrice").value;
    updatedProduct.quantity=document.getElementById("upQuantity").value;

    fetch("http://localhost:8000/products?id="+idToUpdate,{
        method:"PUT",
        body:JSON.stringify(updatedProduct),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.json())
    .then((msg)=>{
        console.log(msg);

        if(msg.success===true){
            allproducts[idToUpdate-1]=updatedProduct;
            displayProducts(allproducts);
            document.getElementById("update_form").style.display="none";
        }
        else{
            console.log(msg);
        }
    })
    .catch((err)=>{
        console.log(err);
    })

}

