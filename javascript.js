let inputEl1=document.getElementById("input-1");
let inputEl2=document.getElementById("input-2");
let ouputEl1=document.getElementById("output-el-1");
let outputEl2=document.getElementById("output-el-2");
let resultEl=document.getElementById("result-el");
let amountEl=document.getElementById("amount-el");



let ebAmount = 0;
let tariff = 0;
let unitEl = 0;

function revealBtn(params) {
	
	ouputEl1.textContent="Previous Reading:"+inputEl1.value;
	outputEl2.textContent="Current Reading:"+inputEl2.value;
	unitEl=Number(inputEl2.value)-Number(inputEl1.value)
	resultEl.textContent="Consumed Units:"+unitEl;
	



	if (unitEl > 0 && unitEl <= 100) {
		tariff = 0;
		ebAmount=0;
	}
	else if (unitEl <= 200) {
		ebAmount = 20 + ((unitEl - 100) * 1.5)+55;
		tariff = ebAmount;
	 }
	else if (unitEl <= 500) {
		ebAmount = 30 + 100 * 2 + (unitEl - 200) * 3;
		if(unitEl>200 && unitEl<=300)	
			ebAmount=ebAmount+145;
		else if(unitEl>300 && unitEl<=400)
			ebAmount=ebAmount+295;
		else if(unitEl>400 && unitEl<=500)
			ebAmount=ebAmount+310;
		tariff = ebAmount;
	 }
	 else if (unitEl > 500) {
		ebAmount = 50 + 100 * 3.5 + 300 * 4.6 + (unitEl - 500) * 6.6;
		 
		tariff = ebAmount;
	 }
	console.log(tariff);
 	amountEl.textContent=tariff;
}

// --------------------------------------------//

		

	 
		

		
// 	}
 	// console.log(tariff);
 	// outputEl.textContent=tariff;
// }



// let units=document.getElementById("unit-consumed");
// let outputEl=document.getElementById("output-el");




// function calculateFn(params) {

		
//             let ebAmount = 0;
// 			let tariff = 0;
// 			let unitEl = 0;
			
// 			if (unitEl > 0 && unitEl <= 100) {
				
// 				tariff = 0;
                
// 			} else if (unitEl <= 200) {
// 				ebAmount = 20 + ((unitEl - 100) * 1.5);
// 				tariff = ebAmount;
                
// 			} else if (unitEl <= 500) {
// 				ebAmount = 30 + 100 * 2 + (unitEl - 200) * 3;
// 				tariff = ebAmount;
                
// 			} else if (unitEl > 500) {
// 				ebAmount = 50 + 100 * 3.5 + 300 * 4.6 + (unitEl - 500) * 6.6;
// 				tariff = ebAmount;
                
// 			}
//             console.log(tariff);
//             outputEl.textContent=tariff;
            
            
//
