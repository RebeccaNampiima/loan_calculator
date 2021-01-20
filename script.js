var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
  /*if(output= 0 && output>100000){
      output.innerHTML = this.value.display = "none";
  }else if(output=100001 && output>200000){
    output.innerHTML = this.value.display = "none";
  }else if(output=200001 && output>300000){
    output.innerHTML = this.value.display = "none";
 }else if(output=300001 && output>400000){
    output.innerHTML = this.value.display = "none";
}else if(output=400001 && output>500000){
    output.innerHTML = this.value.display = "none";
}else{
    output.innerHTML = this.value;
}*/

}

var paybackYear = document.getElementById("my_year");
var output2 = document.getElementById("year_value");
output2.innerHTML = paybackYear.value; 

paybackYear.oninput = function() {
    output2.innerHTML = this.value;
}


function computeLoan(){
	var amount = document.getElementById('myRange').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('year_value').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
