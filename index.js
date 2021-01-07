const suma = (a,b)=> a+b;

const  mult = (a,b) => a * b ;

const div = (a,b) => a / b;

document.addEventListener("DOMContentLoaded",() => {

	console.log("Archivo cargado");
	const content = document.getElementById("mensaje");
	content.innerHTML = suma(10,10);
});
