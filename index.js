const suma = (a,b)=> a+b;

const  mult = (a,b) => a * b ;

const div = (a,b) => a / b;


const resta = (a,b,c) => a-b;

const factoria = (n) => {
	let res =1;
	for (let i=0; i<n; i++){
		res*=i;
	}
}
document.addEventListener("DOMContentLoaded",() => {
	console.log("hola");
	console.log("Archivo cargado");
	const content = document.getElementById("mensaje");
	content.innerHTML = suma(10,10);
	console.log(factorial(10));
});
