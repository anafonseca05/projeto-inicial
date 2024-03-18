var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById ("telefone");
var cep = document.getElementById ("cep");
var logradouro = document.getElementById ("logradouro");
var numero = document.getElementById ("numero");
var complemento = document.getElementById ("complemento");
var bairro = document.getElementById ("bairro");
var cidade = document.getElementById ("cidade");
var estado = document.getElementById ("estado");




function alertar(){
    //alert(nome.value + " " + "Você clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value + 
    "\nE-mail: " + " " + email.value +
    "\nTelefone: " + " " + telefone.value +
    "\nCep: " + " " + cep.value +
    "\nLogradouro: " + " " + logradouro.value +
    "\nNumero: " + " " + numero.value +
    "\nComplemento: " + " " + complemento.value +
    "\nBairro: " + " " + bairro.value +
    "\nCidade: " + " " + cidade.value +
    "\nEstado: " + " " + estado.value;
}