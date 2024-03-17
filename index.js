let vitorias = 12;
let derrotas = 10;
let rankVitorias = (vitorias - derrotas);

function classificacao () {

  
    if (rankVitorias <= 10) { 
        classificacao = "Ferro"}

    else if ((rankVitorias > 10) && (rankVitorias <= 20)) { 
        classificacao = "Bronze"}
    
    else if ((rankVitorias > 20) && (rankVitorias <= 50)) { 
        classificacao = "Prata"}
    
    else if ((rankVitorias > 50) && (rankVitorias <= 80)) { 
        classificacao = "Ouro"}

    else if ((rankVitorias > 80) && (rankVitorias <= 90)) { 
        classificacao = "Diamante"}

    else if ((rankVitorias > 90) && (rankVitorias <= 100)) { 
        classificacao = "Lendário"}

    else (classificacao = "Imortal")

        return classificacao;
}

console.log("O Herói tem de saldo de " + rankVitorias + " está no nível de " + classificacao());