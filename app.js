$(document).ready(function(){
	console.log("$ running");
	checkReturn();
})

var chocolateConsumed=0;
var lemonConsumed=0;
var sugarConsumed=0;

function checkReturn(){
	if ((Cookies.get("chocolate"))||(Cookies.get("lemon"))||(Cookies.get("sugar"))){
		$("#history").show();
		$("#chocoConsume").html(Cookies.get("chocolate"));
		$("#lemonConsume").html(Cookies.get("lemon"));
		$("#sugarConsume").html(Cookies.get("sugar"));
		if (Cookies.get("chocolate")!==undefined){
			chocolateConsumed=Cookies.get("chocolate");
			}
		if (Cookies.get("lemon")!==undefined){	
			lemonConsumed=Cookies.get("lemon");
			}
		if (Cookies.get("sugar")!==undefined){
			sugarConsumed=Cookies.get("sugar");
		}
	}
	// else{
	// 	Cookies.set("visited",true);
	// }
}

function order(){
	chocolateAmount=$("#chocolate").val();
	lemonAmount=$("#lemon").val();
	sugarAmount=$("#sugar").val();

	if($("#chocolate").val()==""){
		chocolateAmount=0;
	}
	if ($("#lemon").val()==""){
		lemonAmount=0;
	}
	if($("#sugar").val()==""){
		sugarAmount=0;
	}

	Cookies.set("chocolate", parseInt(chocolateAmount)+parseInt(chocolateConsumed));
	Cookies.set("lemon", parseInt(lemonAmount)+parseInt(lemonConsumed));
	Cookies.set("sugar", parseInt(sugarAmount)+parseInt(sugarConsumed));
}


function chocolateOne(){
	Cookies.set("chocolate", parseInt(chocolateConsumed)+1);
}

function lemonOne(){
	Cookies.set("lemon", parseInt(lemonConsumed)+1);
}

function sugarOne(){
	Cookies.set("sugar", parseInt(sugarConsumed)+1);
}



function clearHistory(){
	Cookies.expire("visited");
	Cookies.expire("chocolate");
	Cookies.expire("lemon");
	Cookies.expire("sugar");
	console.log("clear () fired");
	//checkReturn();
}

//console.log("chocolate ordered:  " + chocolateAmount);
// console.log("lemon ordered:  " + lemonAmount);
// console.log("sugar ordered: " + sugarAmount);