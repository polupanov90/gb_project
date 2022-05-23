// меню бургеры

const button = document.querySelector(".button");
const cart = document.querySelector(".cart");
let check = document.querySelectorAll('input');
const tipBurger = document.querySelectorAll(".tipBurger");
const tipeFillings = document.querySelectorAll(".tipeFillings");
const tipeSpices = document.querySelectorAll(".tipeSpices");

let priceBlock = document.querySelectorAll('.price-bocks');
const price = document.querySelectorAll('.price');
const calories = document.querySelectorAll('.calories');

let obj = {};

let burgers = {};
let fillings = {};
let spicesj = {};

let massValue = [];


// попытка номер два
priceBlock = [...priceBlock];

let massPrice = document.querySelectorAll('.check-radio');
massPrice.forEach(item => {

	massValue.push(item.value);

});

console.log(massValue);


const arr = ['name', 'age', 'country'];

const obj1 = massValue.reduce((accumulator, value) => {
	return {
		...accumulator, [value]: {
			rate: '50 рублей',
			calory: '20 калорий'
		}
	};
}, {});






console.log(obj1);






//первая попытка

for (i = 0; i < tipBurger.length; i++) {
	let tipe1 = tipBurger[i].firstElementChild.innerText;
	let tipe2 = tipBurger[i].lastElementChild.innerText;
	let b = i + 1;
	let elem1 = `burger${b}Price`
	let elem2 = `burger${b}Calories`
	burgers[elem1] = tipe1;
	burgers[elem2] = tipe2;
}

for (i = 0; i < tipeFillings.length; i++) {
	let tipe1 = tipeFillings[i].firstElementChild.innerText;
	let tipe2 = tipeFillings[i].lastElementChild.innerText;
	let b = i + 1;
	let elem1 = `fillings${b}Price`
	let elem2 = `fillings${b}Calories`
	fillings[elem1] = tipe1;
	fillings[elem2] = tipe2;
}

for (i = 0; i < tipeSpices.length; i++) {
	let tipe1 = tipeSpices[i].firstElementChild.innerText;
	let tipe2 = tipeSpices[i].lastElementChild.innerText;
	let b = i + 1;
	let elem1 = `spices${b}Price`
	let elem2 = `spices${b}Calories`
	spicesj[elem1] = tipe1;
	spicesj[elem2] = tipe2;
}



const { burger1, burger2 } = burgers;


obj = {
	...burgers,
	...fillings,
	...spicesj
};

console.log(obj);


// const check_burger = document.querySelector(".check-burger");
// cart.addEventListener('click', (e) => {
// 	//const whot = e.target
// 	//console.log(whot);
// 	const bag = document.querySelector(".fillings-cart");
// 	if (e.composedPath() === bag) {
// 		check_burger.prop('checked', false);
// 	}
// 	check.forEach(item => {
// 		if (item.checked) {
// 			console.log(item);
// 		}
// 	})
// }
// )

// cart.addEventListener('click', (e) => {
// 	//const whot = e.target
// 	//console.log(whot);
// 	console.log(e.composedPath());
// 	for (i = 0; i < check.length; i++) {
// 		if (check[i].checked) {
// 			console.log(check[i]);
// 		}
// 	}
// }
// )



let objOrder = {};

const whotClick = () => {     // функция собирающая чеки

	check.forEach(item => {

		if (item.checked) {
			let checkMass = [];
			let checkMass2 = [];
			checkMass.push(item.value);
			checkMass2.push(item);
			let price = item.value + 'Price';
			let calories = item.value + 'Calories';
			objOrder[checkMass] = {
				rate: obj[price],
				calory: obj[calories]
			};
			//objOrder[price, calories] = obj[price], obj[calories];


		}

	})

}


function sum(obj) {
	var summ = 0;
	for (var el in obj) {
		if (obj.hasOwnProperty(el)) {
			summ += parseFloat(obj[el]);
		}
	}
	return sum;
}




button.addEventListener('click', e => {
	e.preventDefault();
	whotClick();
	console.log(objOrder);
}, false);





