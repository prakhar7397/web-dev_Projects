let products= [

	{'name':'MONITOR','price':123,'quantity':34},
	{'name':'KEYBOARD','price':13,'quantity':4}
];

display();

function addProduct(){

	let product={};

	product.name=document.getElementById("name").value;
	product.price=document.getElementById("price").value;
	product.quantity=document.getElementById("quantity").value;               


	products.push(product);

	// console.log(products)

	display();

	document.getElementById("name").value='';
	document.getElementById("price").value='';
	document.getElementById("quantity").value='';

}

function display(){

	let productString='';

	for(let i=0;i<products.length;i++){

		productString+=`
		<tr>
			<td>${i+1}</td>
			<td style="text-align: center;">${products[i].name}</td>
			<td style="text-align: center;">${products[i].price}</td>
			<td style="text-align: center;">${products[i].quantity}</td>
			<td>
			    <button class="btn" onclick="update()">Update</button>    
				<button class="btn">Delete</button>
			</td>
		</tr>

		`
		// console.log(productString);

		document.getElementById('tbody').innerHTML=productString;

	}
		
}

function update(){
	
}

