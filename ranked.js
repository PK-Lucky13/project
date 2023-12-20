/*Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo 
(vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** e está no nível de **{nivel}**
*/

let nivel = nivelHeroi(saldoVitorias = saldoRankeadas(60, 5))

function saldoRankeadas(vitorias, derrotas) {
  return vitorias - derrotas
}

function nivelHeroi(saldoVitorias) {
  switch (true) {
    case saldoVitorias <= 10:
      resultado = "Ferro"  
      break
    case saldoVitorias >= 11 && saldoVitorias <= 20:
      resultado = "Bronze"
      break
    case saldoVitorias >= 21 && saldoVitorias <= 50:
      resultado = "Prata"
      break
    case saldoVitorias >= 51 && saldoVitorias <= 80:
      resultado = "Ouro"
      break
    case saldoVitorias >= 81 && saldoVitorias <= 90:
      resultado = "Diamante"
      break
    case saldoVitorias >= 91 && saldoVitorias <= 100:
      resultado = "Lendário"
      break
    case saldoVitorias >= 101:
      resultado = "Imortal"
      break
  }
  return resultado
}

console.log(`O saldo do Herói é de ${saldoVitorias} e está no nível de ${nivel}.`)
