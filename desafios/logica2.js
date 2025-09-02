// Função que calcula saldo de vitórias e nível
function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso com laço de repetição para testar diferentes jogadores
let jogadores = [
  { vitorias: 5, derrotas: 2 },
  { vitorias: 15, derrotas: 7 },
  { vitorias: 37, derrotas: 20 },
  { vitorias: 75, derrotas: 40 },
  { vitorias: 85, derrotas: 50 },
  { vitorias: 95, derrotas: 60 },
  { vitorias: 120, derrotas: 80 }
];

for (let i = 0; i < jogadores.length; i++) {
  console.log(calcularRankeadas(jogadores[i].vitorias, jogadores[i].derrotas));
}