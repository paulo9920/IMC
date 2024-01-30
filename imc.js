const exibirResultado = parseFloat(document.getElementById("exibirResultado").value);
function calcular() {
    var altura = parseFloat( document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    
    var valor = peso/altura ** 2;
    var valorPerc = valor *10000
    if (valorPerc < 18.5) {
        texto =`seu imc é ${(valorPerc).toFixed(2)}%, você está fellipe`
    }else if(valorPerc <24.9){
        texto =`seu imc é ${(valorPerc).toFixed(2)}%, você está com o imc normal`
    }else if(valorPerc <29.9){
        texto =`seu imc é ${(valorPerc).toFixed(2)}%, você está com sobrepeso`
    }else if(valorPerc<39.9){
       texto = `seu imc é ${(valorPerc).toFixed(2)}%, você está com obesidade`
    }else if(valorPerc>39.9){
        texto =`seu imc é ${(valorPerc).toFixed(2)}%, você está com obesidade mórbida`
    }
    document.getElementById("exibirResultado").innerText=texto
}