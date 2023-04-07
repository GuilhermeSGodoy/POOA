# T2 - Princípio Aberto-Fechado

## Autores

| Nome                      | RA     | Curso   |
|---------------------------|--------|---------|
| Guilherme Santos de Godoy | 758710 | BCC 018 |
| Igor Lúcio Manta Guedes   | 743185 | BCC 018 |

## Introdução

Este código tem o objetivo de implementar uma ferramenta que busque e baixe os títulos das notícias do dia atual. Como exemplo de sua utilização, foram preparados os códigos referentes aos sites **Estadão**, **Globo** e **Uol**. Este trabalho foi proposto e executado com a intenção de se adequar aos dois primeiros princípios SOLID: princípio de responsabilidade única (SRP) e princípio aberto-fechado (OCP).  

## Dependências

O projeto é implementado em `Node.js v14.17` e suas dependências foram geridas pelo `npm v7.24`.  
- Para instalar as dependências, basta executar o comando `npm i`
- Para executar o projeto, basta utilizar o comando `node index.js`

- Para tratar o acesso aos sites, foi utilizado o framework [axios](https://www.npmjs.com/package/axios)
- O html parser utilizado foi o [cheerio](https://www.npmjs.com/package/cheerio)
- Para escrever a saída em CSV, foi utilizado o pacote [csv-writer](https://www.npmjs.com/package/csv-writer)

## Utilização

Assim que for executado, o código exibirá os títulos das notícias dos sites pré-definidos em um arquivo `titles.csv`. O programa carregará as informações dos sites, como pode ser visto em `index.js`, e os exibirá da maneira adequada em um arquivo `.csv`, de acordo com o que é descrito em `outputWrite.js`, localizado no diretório `utils`.  
A captura das informações desejadas de cada site é feita a partir de suas respectivas classes, que são filhas da classe abstrata `SiteAbstract`, responsável por determinar um método `getTitles()` que será implementado para todos os sites para a coleta das informações desejadas. Isso pode ser verificado em maiores detalhes nos arquivos do diretórios sites, em especial na classe `Estadao.js`.

#### Nota:
Eventualmente, a chamada do axios pode retornar `ECONNRESET` para algum site. Isso ocorre por algum bloqueio do site contra o próprio axios, seja por excesso de requisições, por suspeitar que é um acesso não-orgânico, etc. Para contornar, aguarde 5 segundos e tente novamente.

#### Nota 2:
O arquivo CSV possui função de _append_. Ao rodar o programa novamente, como na situação descrita acima, serão adicionadas listas duplicadas ao arquivo.  

## Estrutura

As duas possibilidades de extesão descritas nas orientações do projeto foram tratadas com um design pattern similar à fábrica e ao strategy. A classe abstrata `SiteAbstract` define o formato que toda classe de site deve seguir, garantindo que não haverá modificações em quaisquer funções base dos sites (como algum tratamento de URL, alguma especificação de como o site deve ser requisitado pelo código, etc), mas torna-se simples extender suas funções.  
Ao garantir que todos os sites possuem a função `getTitles()`, o código de `index.js` passa todos os objetos de site para a função `utils/outputWriter.js`, que realiza a chamada para obter os títulos e repassa as informações para todos os `writers` definidos.  

## Modificação

Para adicionar um novo site para a exibição de informações, é necessário gerar um novo arquivo referente ao site desejado. A princípio, deve-se especificá-lo como um novo objeto em `index.js` e passar sua URL ao construtor da classe. O arquivo contido no diretório `sites` deve conter o código necessário para encontrar os elementos HTML referentes aos títulos da notícia daquele site.  
Esse padrão de projeto foi escolhido pois cada site tem sua própria _estratégia_ de busca de títulos. No Estadão, por exemplo, é preciso filtrar quais elementos HTML possuem a classe `title` **e** possuem uma tag `<a>` dentro deles, caso contrário são retornados elementos que não são títulos de notícia.  

&nbsp;

Para adicionar um novo método de saída, deve-se criar uma função a pasta `utils/writers/` e adicioná-la ao código de `utils/outputWriter.js`. Aqui não fazia sentido usar abstração para uma única função, mas como pode-se imaginar, é necessário que a função seja chamada `writer()` e receba `site` e `data` como parâmetros.  

&nbsp;

Mais informações podem ser encontradas nos comentários dos códigos.  

## Referências

- https://tomassetti.me/parsing-html/
- https://stackoverflow.com/questions/64928151/scraping-the-news-titles-from-news-websites
- https://www.mundojs.com.br/2020/05/25/criando-um-web-scraper-com-nodejs/
- Documentação dos frameworks utilizados
