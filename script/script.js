function RegistrarOperacao(){ 
    for (j in sinais){
        
        sinais[j].disabled=true
    }    
    operacao=this.value
}

function ExibirResultado(){

    const visor = document.getElementById('Resultado');
    let operadores= 0
    let sinal=''
    for (i of visor.innerText){
        if ('+-/*'.includes(i)){
            sinal= i
            operadores= visor.innerText.split(sinal)
            visor.innerText= Calcular(Number(operadores[0]),sinal,Number(operadores[1]))
            break
        } 
    }
}

function Calcular(operador1,sinal, operador2) {
    for (j in sinais){
        
        sinais[j].disabled=true
    }    
    switch (sinal) {
        case '+':
            return operador1 + operador2;
        case '-':
            return operador1 - operador2;
        case '*':
            return operador1 * operador2;
        case '/':
            return operador1 / operador2;
        default:
            return undefined;
    }
}

const valores = document.getElementsByTagName('button');

for (i in valores) {
    valores[i].onclick= function (){
        const resultado = document.getElementById('Resultado');
        resultado.innerText+=`${this.value}`;
    }
}
const sinalIgual= document.querySelector('#Botoes-Numeros .sinal');
sinalIgual.onclick= function(){ExibirResultado()}

let operacao=''
const sinais= document.querySelectorAll('#Botoes-Sinais .sinal')
for (i in sinais){
    sinais[i].addEventListener('click', RegistrarOperacao)
}



//operacao=document.getElementById('Operacao');

//operador1=Number(prompt('Digte o primeiro operador: '));
//sinal=prompt('Digte agora a operação desejada: ');
//operador2=Number(prompt('Digte o segundo operador: '));
