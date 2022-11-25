var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricioonista";

var paciente = document.querySelector("#paciente-um");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var PesoEhValido = true;
var AlturaEhValida = true;


if (peso < 0 || peso > 1000){
	console.log("Peso Inválido!");
	PesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
	console.log("Altura Inválida!");
	AlturaEhValida = false;
}

if (PesoEhValido && AlturaEhValida) {
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}