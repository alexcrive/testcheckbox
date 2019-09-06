
let checkboxes = document.getElementsByClassName('srStar');
let arrayBox = [];
let arrayCount = [];
//console.log(checkboxes.length);
for (let i = 1; i <= checkboxes.length; i++) {
	arrayBox[i] = document.getElementById('sr' + i);
} 
for (let i = 1; i <= checkboxes.length; i++) {
	arrayCount[i] = 0;
} 
function ifClicked() {
	
	for (let i = 1; i <= checkboxes.length; i++) {
		if(arrayBox[i].checked == true) {
			arrayCount[i]++;
		}
	}
//localStorage["arrayCount"] = JSON.stringify(arrayCount);
sessionStorage.setItem('arrayCount', JSON.stringify(arrayCount))
let counter = JSON.parse(sessionStorage.getItem('arrayCount')); 
console.log(counter);
}



