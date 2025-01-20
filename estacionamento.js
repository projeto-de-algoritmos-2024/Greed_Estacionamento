const fs = require('fs');

const numeroDeVagas = 3;

let vagas = Array(numeroDeVagas).fill(null);

let carroIdCounter = 1;

const intervalo = 1000; // 1 segundo

function gerarDuracaoAleatoria() {
  return Math.floor(Math.random() * 4) + 1; // Permanência entre 1 e 4 segundos
}

function gerarEntradaDeCarro() {
  const carro = {
    id: `Carro${carroIdCounter++}`,
    chegada: Date.now(),
    saida: null,
    vaga: null,
  };

  carro.saida = carro.chegada + gerarDuracaoAleatoria() * 1000;
  return carro;
}

function atualizarVagas() {
  const agora = Date.now();
  for (let i = 0; i < vagas.length; i++) {
    if (vagas[i] && vagas[i].saida <= agora) {
      console.log(
        `🚗 ${vagas[i].id} saiu da Vaga ${i + 1} às ${new Date(
          vagas[i].saida,
        ).toLocaleTimeString()}`,
      );
      vagas[i] = null;
    }
  }
}

function tentarEstacionarCarro(carro) {
  const vagaIndex =
    (parseInt(carro.id.replace('Carro', '')) - 1) % numeroDeVagas;

  if (vagas[vagaIndex] === null) {
    carro.vaga = vagaIndex + 1;
    vagas[vagaIndex] = carro;
    console.log(
      `✅ ${carro.id} alocado na Vaga ${carro.vaga} (Chegada: ${new Date(
        carro.chegada,
      ).toLocaleTimeString()}, Saída: ${new Date(
        carro.saida,
      ).toLocaleTimeString()})`,
    );
  } else {
    console.log(
      `❌ ${carro.id} tentou estacionar na Vaga ${vagaIndex + 1}, mas está ocupada por ${vagas[vagaIndex].id}`,
    );
  }
}

function salvarEstadoEmArquivo() {
  const conteudo = vagas
    .map((vaga, index) => {
      if (vaga) {
        return `Vaga ${index + 1}: ${vaga.id} (Chegada: ${new Date(
          vaga.chegada,
        ).toLocaleTimeString()}, Saída: ${new Date(
          vaga.saida,
        ).toLocaleTimeString()})`;
      } else {
        return `Vaga ${index + 1}: [Vazia]`;
      }
    })
    .join('\n');

  fs.writeFileSync('estado_estacionamento.txt', conteudo, 'utf8');
  console.log("📂 Estado salvo em 'estado_estacionamento.txt'");
}

setInterval(() => {
  atualizarVagas();
  const novoCarro = gerarEntradaDeCarro();
  tentarEstacionarCarro(novoCarro);
  salvarEstadoEmArquivo();
}, intervalo);
