# T1 - Princípio da Responsabilidade Única

## Autores

| Nome                      | RA     | Curso   |
|---------------------------|--------|---------|
| Guilherme Santos de Godoy | 758710 | BCC 018 |
| Igor Lúcio Manta Guedes   | 743185 | BCC 018 |

## 1.1. Conceito Básico

O Princípio da Responsabilidade Única (SRP) é o primeiro princípio do modelo SOLID, voltado ao aprimoramento e otimização de programas orientados a objetos. Preocupa-se com a coerência lógica na disposição dos métodos e classes, de forma que as funções do sistema sejam supridas de maneira satisfatória e que sua manutenção ou atualização seja intuitiva e de fácil acesso.  
Tem-se como seu conceito básico que uma classe deve ter apenas um motivo para mudar, definido como uma responsabilidade. Sendo assim, é imperativo que uma mudança ocorra, de fato, e que esteja dentro do contexto da classe proposta.  
&nbsp;  
É importante notar que a definição de responsabilidade dentro do contexto de um programa é meramente semântica; definições de métodos não bastam para determinar o que é uma responsabilidade, posto que uma determinada responsabilidade pode ser administrada por mais de uma função, desde que faça parte do escopo desejado. Essas definições e arranjos entre classes devem ser pautadas durante a fase do projeto do software, evitando eventuais problemas e dificuldades em sua implementação e manutenção, de modo que cada responsabilidade identificada torna-se uma classe.  
&nbsp;  
Dentre as vantagens deste princípio, é possível citar uma maior organização do código, facilitando a busca direta por uma determinada função do software; divisão maior entre classes, aumentando a legibilidade do código; e maior facilidade para atualizações, manutenção e inclusão de novos recursos.

## 1.2. Exemplo de Aplicação

Como exemplo, vamos imaginar um projeto de um chatbot que recebe e envia mensagens para um usuário, abstraindo de várias funcionalidades para focar no exemplo de SRP. Um chatbot é, em geral, uma máquina de estados que muda conforme uma opção selecionada pelo usuário. Para entender e processar o que o usuário escreve, o chatbot utiliza uma "gramática" — um dicionário de possíveis frases que são atribuídas a uma opção.  
&nbsp;  
Exemplo:  
```
1: {sim, quero, sou eu, posso}
2: {nao, nao quero, engano, nao sou eu, nao posso}
```

Caso a mensagem do usuário seja 50% parecida com algum dos itens do dicionário, é interpretada a opção correspondente.  
Abaixo, é apresentado o código deste exemplo sem a aplicação do SRP:

```javascript
class Bot {
  constructor() {
    this.currentState = MenuState;
  }
  {...}
}

class MenuState {
  constructor(bot) {
    this.bot = bot;
    this.grammar = require('grammar.json');
  }

  processState() {
    const input = this.bot.getMessage();
    const option = findSimilarString(input, this.grammar, 0.5);
      
    switch (option) { ... }
  }
}

class ValidationState {
  constructor(bot) {
    this.bot = bot;
    this.grammar = require('grammar.json');
  }

  processState() {
    const input = this.bot.getMessage();
    const option = findSimilarString(input, this.grammar, 0.5);

    switch (option) { ... }
  }
}
```

Aqui, além de uma repetição de código, podemos identificar um problema de responsabilidade: cada classe de estado é responsável por duas coisas distintas, interpretar a opção selecionada pelo usuário e processar essa opção.  
O que acontece se, no futuro, o processo de interpretação de mensagens mudar? Seria necessário alterar todos os estados criados para o bot, dificultando a refatoração.
Para aplicar o SRP, vamos dividir a responsabilidade de interpretar o input em uma classe separada:

```javascript
class Bot {
  constructor() {
    this.currentState = MenuState;
  }
  {...}
}

class InputInterpreter {
  constructor() {
    this.grammar = require('grammar.json');
  }

  getSelectedOption(input) {
    return findSimilarString(input, this.grammar, 0.5);
  }
}

class MenuState {
  constructor(bot) {
    this.bot = bot;
    this.interpreter = new InputInterpreter();
  }

  processState() {
    const input = this.bot.getMessage();
    const option = this.interpreter.getSelectedOption(input);
      
    switch (option) { ... }
  }
}

class ValidationState {
  constructor(bot) {
    this.bot = bot;
    this.interpreter = new InputInterpreter();
  }

  processState() {
    const input = this.bot.getMessage();
    const option = this.interpreter.getSelectedOption(input);
      
    switch (option) { ... }
  }
}
```

Agora, cada estado é responsável apenas por realizar seu próprio processamento para o fluxo do bot. Caso ocorra uma mudança na forma de interpretar a mensagem (como um dicionário diferente ou um percentual maior de similaridade), apenas a classe responsável por interpretar mensagens será refatorada, tornando a manutenção bem menos custosa.
