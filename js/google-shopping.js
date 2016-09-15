var data = require('../products.json');

// Write your solutions below

// console.log(data.items);



// Question One

var count = 0;
	for(var i = 0; i < data.items.length; i++){
		if(data.items[i].kind === "shopping#product") {
		count++;
		}
	}

console.log(count);


// Question Two

for(var i = 0; i < data.items.length; i++) {
	if(data.items[i].product.inventories[0].availability === "backorder") {
		console.log(data.items[i].product.title);
	}
}

// Question Three

for(var i = 0; i < data.items.length; i++) {
	if(data.items[i].product.images.length > 1){
		console.log(data.items[i].product.title);
	}
}

// Question Four

for(var i = 0; i < data.items.length; i++) {
	if(data.items[i].product.brand === "Canon") {
		console.log(data.items[i].product.title)
	}
}

// Question Five

for(var i = 0; i < data.items.length; i++) {
	if(data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay") {
		console.log(data.items[i]);
	}
}

// Question Six

for(var i = 0; i < data.items.length; i++) {
	console.log("Brand: " + data.items[i].product.brand);
	console.log("Price: $" + data.items[i].product.inventories[0].price);
	console.log("Image: " + data.items[i].product.images[0].link);
}
