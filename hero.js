// Projeto 1

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

// Luta com monstro até aumentar o XP enquanto o mana não acabar
// XP aumenta dinamicamente, mudando o switch case

let heroi = {
  nome: "Gandalf",
  nivel: "",
  xp: 99999,
  mana: 100,
};

switch (true) {
  case heroi.xp <= 1000:
    heroi.nivel = "Ferro";
    break;
  case heroi.xp >= 1001 && heroi.xp <= 2000:
    heroi.nivel = "Bronze";
    break;
  case heroi.xp >= 2001 && heroi.xp <= 5000:
    heroi.nivel = "Prata";
    break;
  case heroi.xp >= 6001 && heroi.xp <= 7000:
    heroi.nivel = "Ouro";
    break;
  case heroi.xp >= 7001 && heroi.xp <= 8000:
    heroi.nivel = "Platina";
    break;
  case heroi.xp >= 8001 && heroi.xp <= 9000:
    heroi.nivel = "Ascendente";
    break;
  case heroi.xp >= 9001 && heroi.xp <= 10000:
    heroi.nivel = "Imortal";
    break;
  case heroi.xp >= 10001:
    heroi.nivel = "Radiante";
    break;
  default:
    heroi.nivel = "Indefinido";
}

console.log("O Herói "+heroi.nome+" está no nível "+heroi.nivel);
