# LetterGame

**Número da Lista**: Greed<br>
**Conteúdo da Disciplina**: Grafos (Interval Partition)<br>

## Alunos

| Matrícula  | Aluno                          |
| ---------- | ------------------------------ |
| 19/0115564 | Pedro Lucas Siqueira Fernandes |
| 19/0030755 | João Paulo Lima da Silva       |

## Sobre

O objetivo do projeto **Estacionamento** é construir uma ferramenta para organizar a entrada e saída de carros de um determinado estacinamento, mantendo a profundidade de vagas ocupadas/abertas próximas, para não ter estacionamento aberto sem a necessidade.

### [Link Apresentação](https://youtu.be/tNageozpL98)

### Como Funciona
Simula um estacionamento com 3 vagas, onde carros entram e saem automaticamente a cada 1 segundo. Cada carro tem um tempo aleatório de permanência (1 a 4 segundos). Vagas são liberadas quando o tempo expira, e novos carros tentam estacionar em vagas específicas baseadas no ID. O estado atual do estacionamento é salvo em um arquivo de texto
## Screenshots
![Imagem 1](/Screenshot%20from%202025-01-20%2021-46-06.png)
![Imagem 2](/Screenshot%20from%202025-01-20%2021-46-22.png)
## Instalação

**Linguagem**: Javascript<br>

## Uso

Para usar o projeto, execute o script principal no Node.js.

### Passo a Passoa
1. **Execução do Script Principal**:
   ```bash
   node estacionamento.js
   ```
   - O estacionamento irá começar a registar entrada e saída, também irá escrever dentro de um arquivo .txt a troca de carros dentro de uma vaga ao longo do dia