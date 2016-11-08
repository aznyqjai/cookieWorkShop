$(document).ready(function(){
	console.log("$ running");

})

var chocolateAmount=0 + Cookies.get("chocolate");
var lemonAmount=0 + Cookies.get("lemon");
var sugarAmount=0 + Cookies.get("sugar");

function checkReturn(){
	if (Cookies.get("visited")){

	}
	else{
		Cookies.set("visited",true);
	}
}

function order(){
	chocolateAmount=$("#chocolate").val();
	lemonAmount=$("#lemon").val()
	sugarAmount=$("#sugar").val()

	Cookies.set("chocolate", chocolateAmount);
	Cookies.set("lemon", lemonAmount);
	Cookies.set("sugar", sugarAmount);
}

// console.log("chocolate ordered:  " + chocolateAmount);
// console.log("lemon ordered:  " + lemonAmount);
// console.log("sugar ordered: " + sugarAmount);