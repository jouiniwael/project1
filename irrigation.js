var obj={
winter:{
	tomato:{
		Sandy:'needs 10 Lof water per week',
		Slit:'needs 20000 L of water per week',
		Clay:'needs 15252 L of water per week',
		Loamy:'needs80000 L of water per week'

	},
	potatos:{
		Sandy:'needs 30000mlof water per week',
		Slit:'needs 4000ml of water per week',
		Clay:'needs 5000ml of water per week',
		Loamy:'needs6000ml of water per week'
	},
	onions:{
		Sandy:'needs 70000mlof water per week',
		Slit:'needs 8000ml of water per week',
		Clay:'needs 9000ml of water per week',
		Loamy:'needs10000ml of water per week'
	},
	peas:{
		Sandy:'needs 110000mlof water per week',
		Slit:'needs 12000ml of water per week',
		Clay:'needs 13000ml of water per week',
		Loamy:'needs14000ml of water per week'
	}

},
spring:{
	tomato:{
		Sandy:'needs 15000mlof water per week',
		Slit:'needs 16000ml of water per week',
		Clay:'needs 17000ml of water per week',
		Loamy:'needs18000ml of water per week'

	},
	potatos:{
		Sandy:'needs 19000mlof water per week',
		Slit:'needs 20000ml of water per week',
		Clay:'needs 30000ml of water per week',
		Loamy:'needs40000ml of water per week'
	},
	onions:{
		Sandy:'needs 500000mlof water per week',
		Slit:'needs 60000ml of water per week',
		Clay:'needs 70000ml of water per week',
		Loamy:'needs80000ml of water per week'
	},
	peas:{
		Sandy:'needs 90000mlof water per week',
		Slit:'needs 100000ml of water per week',
		Clay:'needs 110000ml of water per week',
		Loamy:'needs120000ml of water per week'
	}

},
summer:{
tomato:{
		Sandy:'needs 15000mlof water per week',
		Slit:'needs 16000ml of water per week',
		Clay:'needs 17000ml of water per week',
		Loamy:'needs18000ml of water per week'

	},
	potatos:{
		Sandy:'needs 19000mlof water per week',
		Slit:'needs 20000ml of water per week',
		Clay:'needs 30000ml of water per week',
		Loamy:'needs40000ml of water per week'
	},
	onions:{
		Sandy:'needs 500000mlof water per week',
		Slit:'needs 60000ml of water per week',
		Clay:'needs 70000ml of water per week',
		Loamy:'needs80000ml of water per week'
	},
	peas:{
		Sandy:'needs 90000mlof water per week',
		Slit:'needs 100000ml of water per week',
		Clay:'needs 110000ml of water per week',
		Loamy:'needs120000ml of water per week'
	}



},
autumn:{
	tomato:{
		Sandy:'needs 15000mlof water per week',
		Slit:'needs 16000ml of water per week',
		Clay:'needs 17000ml of water per week',
		Loamy:'needs18000ml of water per week'

	},
	potatos:{
		Sandy:'needs 19000mlof water per week',
		Slit:'needs 20000ml of water per week',
		Clay:'needs 30000ml of water per week',
		Loamy:'needs40000ml of water per week'
	},
	onions:{
		Sandy:'needs 500000mlof water per week',
		Slit:'needs 60000ml of water per week',
		Clay:'needs 70000ml of water per week',
		Loamy:'needs80000ml of water per week'
	},
	peas:{
		Sandy:'needs 90000mlof water per week',
		Slit:'needs 100000ml of water per week',
		Clay:'needs 110000ml of water per week',
		Loamy:'needs120000ml of water per week'
	}
}
}







//////////////////////////////////////





//var land={
//sandy:'Sandy'
//clay:'Clay',
//loamy:'Loamy'
//}


var vegetables;
var land;

function clickRadio(event){   
 vegetables= event.target.value
}

function clickFalio(event){   
 land= event.target.value
}

function myFunction(event){

//event.target.value
console.log(obj[event.target.value][vegetables][land])
}	