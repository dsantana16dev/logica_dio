// logica1.js - Classificador de nível de herói

// Função para ler input do terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o nome do herói: ", (nome) => {
  readline.question("Digite a quantidade de experiência (XP) do herói: ", (xpInput) => {
    let xp = parseInt(xpInput);

let nivel = ""

// Estrutura de decisão:
    if (xp < 1000){
        nivel ="Ferro";
    }else if(xp >= 1001 && xp <= 2000){
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 3000){
        nivel = "Prata";
    } else if (xp >= 3001 && xp <= 4000) {
        nivel = "Ouro";
    } else if (xp >= 4001 && xp <= 5000) {
        nivel = "Platina";
    } else if (xp >= 5001 && xp <= 6000) {
        nivel = "Ascendente";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel ="Imortal"
    }else {
        nivel="Radiante"
    }
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    readline.close();
  });
});