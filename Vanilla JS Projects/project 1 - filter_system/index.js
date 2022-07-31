let products = [
    {
        id:1,
        name:"Maggi",
        price:10,
        quantity:80,
        category:"food",
        pic:"https://e7.pngegg.com/pngimages/787/1007/png-clipart-instant-noodle-indian-cuisine-maggi-noodles-masala-chai-food-recipe.png"
    },
    {
        id:2,
        name:"RedBull",
        price:100,
        quantity:30,
        category:"drink",
        pic:"https://toppng.com/uploads/preview/red-bull-115456905526ysswvqhq4.png"
    },
    {
        id:3,
        name:"Amul Cheese",
        price:140,
        quantity:120,
        category:"dairy",
        pic:"https://w7.pngwing.com/pngs/374/199/png-transparent-processed-cheese-milk-amul-cheese-spread-milk-food-cheese-curd.png"
    },
    {
        id:4,
        name:"Gatorade",
        price:50,
        quantity:170,
        category:"drink",
        pic:"https://www.pngfind.com/pngs/m/224-2249400_gatorade-png-red-gatorade-transparent-png.png"
    },
    {
        id:5,
        name:"Go Cheese",
        price:120,
        quantity:65,
        category:"dairy",
        pic:"https://img.favpng.com/15/7/25/dairy-products-milk-amul-go-cheese-png-favpng-wntxZuBJASwBt8igcCQkjHB7s.jpg"
    },
    {
        id:6,
        name:"Knorr Soup",
        price:40,
        quantity:200,
        category:"food",
        pic:"https://toppng.com/uploads/preview/knorr-soups-11538604614n3m6nxwgjf.png"
    }
]

// console.log(products)

function displayData(arr){

    document.getElementById("data").innerHTML="";

    arr.forEach(function(product,index){

        let row=document.createElement("tr");

        let number=document.createElement("td")
        number.append(index+1);

        let nameTd=document.createElement("td");
        nameTd.append(product.name);

        // console.log(nameTd)

        let priceTd=document.createElement("td");
        priceTd.append(product.price);

        let quantityTd=document.createElement("td");
        quantityTd.append(product.quantity);

        let categoryTd=document.createElement("td");
        categoryTd.append(product.category);

        let picTd=document.createElement("td");
        proPic=document.createElement("img");
        proPic.setAttribute("src",product.pic);
        picTd.appendChild(proPic);

        row.appendChild(number);
        row.appendChild(nameTd);
        row.appendChild(priceTd);
        row.appendChild(quantityTd);
        row.appendChild(categoryTd);
        row.appendChild(picTd);

        document.getElementById("data").appendChild(row);

    })
}

displayData(products);


let filter_status=false;

function displayFilterSection(){

    if(filter_status==false){
        document.getElementById("filter_section").style.marginLeft="0px";
        filter_status=true;
    }
    else{
        document.getElementById("filter_section").style.marginLeft="-30%";
        filter_status=false;
    }
    
}

let filters = {
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setFilters(filter_type,filter_value){

    if(filter_value!=null){
        filters[filter_type]=filter_value;

        if(filter_type==="minPrice"){

            document.getElementById("max").setAttribute("min",Number(filter_value)+1);
            document.getElementById("minRangeBar").innerText=Number(filter_value)+1;
    
        }
    }
    else{
        filters[filter_type]=null;
    }

}


function applyFilters(){

    let newProducts=products;

    if(filters.category!==null){
        newProducts=newProducts.filter(function(product,index){
            return (filters.category.toLowerCase()===product.category.toLowerCase());
        })
    }


    if(filters.quantity!==null){
        newProducts=newProducts.filter(function(product,index){
            return (Number(filters.quantity)<=Number(product.quantity));
        })
    }

    
    if(filters.minPrice!==null){
        newProducts=newProducts.filter(function(product,index){
            return (Number(filters.minPrice<=Number(product.price)));
        })

    }

    if(filters.maxPrice!==null){
        newProducts=newProducts.filter(function(product,index){
            return (Number(filters.maxPrice>=Number(product.price)));
        })
    }

    document.getElementById('filter_section').style.marginLeft='-30%';
    filter_status=false;

    displayData(newProducts);

}

