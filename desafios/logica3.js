class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // garantir comparação em minúsculo
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "não possui ataque definido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de heróis
const herois = [
  new Heroi("Arthas", 30, "guerreiro"),
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

// Executar ataques com laço de repetição
for (let h of herois) {
  h.atacar();
}