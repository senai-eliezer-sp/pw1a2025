var nome = "Eliezer"
var idade = "17"
var idadePassada = 10
var anoPassado = 2024
var anoAtual = '2025'
var peso = 78.5
var altura = 1.70
var luzNaoApagada = false
var SemNamorada = true

//var nome = prompt("Digite seu nome: ")
//alert(nome)    //ou pode ser   alert("O nome digitado foi: " + nome)
/*
    Crie  3 variaveis,
    peça para o usuario digitar 3 numeros
    e exiba em um alerta a soma deles
*/

/*var bank1 = prompt("Digite um numero: ") 
var bank2 = prompt("Digite outro numero: ")
var bank3 = prompt("Digite o ultimo numero: ")

bank1 = Number(bank1)
bank2 = Number(bank2)
bank3 = Number(bank3)

var soma = bank1 + bank2 + bank3

alert("A somas dos bancos sao: " + soma)*/

/*var numero = Number(prompt("Digite um numero: ")) 
if(numero % 2 == 0){
    alert("o numero " +numero+ " é par.")
}
else{
    alert("O numero " +numero+ " é impar.")
}

/*
 Peça para o usuario digitar uma idade
 e verifique se ele pode beber e dirigir.
 Se pode beber exiba um alerta 
 autorizando comprar metanol.
*/
/*
var idade = prompt("Digite sua idade: ")
 if(idade >= 18){
    alert("Você pode Dirigir e comprar Metanol")
 }
 else{
    alert("Voce pode Dirigir mais nao pode comprar Metanol")
 }

 /*                                 //                                     */
/*
var tempo = true
 var dinheiro = true
 if(tempo == true && dinheiro == true){
    alert("Viajo")
 }*/

    var saldo = prompt("Digite o Saldo que voce tem para viajar: ")
        if(saldo <= 499){
            alert("Voce nao vai para lugar nenhum.")    
        }
        else if(saldo == 500){
            alert("Voce pode ir para SP.")
        }else if(saldo >= 501 && saldo <=700){
            alert("Voce consegue ir para RJ ")
        }else if(saldo >= 701 && saldo <= 1000){
            alert("Voce consegue ir MG.")
        }else if(saldo > 1001){
            alert("Voce consegue ir para o Nordeste.")
        }
