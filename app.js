fetch('shirts.json').then(res => res.json().then( data => {
	//variable to hold all of our products with HTML
	let records= ''



	data.forEach((element) => {
		let str =  
    `<div class="pro">
		<img src=${element.pictureLocation} alt="${element.productName}" />
		<div class="des">
		  <h5>
				${element.productDescription}
		  </h5>

		  <h4>${element.productPrice}</h4>
		</div>
	  </div>`

		records += str
	});

	document.getElementById("pro-container").innerHTML = records

})).catch(err => {
	console.log(err)
})