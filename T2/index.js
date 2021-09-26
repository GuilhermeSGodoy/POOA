// importa os sites criados
const Globo = require("./sites/Globo").Globo;
const Estadao = require("./sites/Estadao").Estadao;
const Uol = require("./sites/Uol").Uol;

// importa a função que escreve o output
const outputWriter = require("./utils/outputWriter").outputWriter;


// define a lista de sites a ser percorrida
let sites = [];

// adiciona objetos dos sites com suas URLs
sites.push(new Globo("https://globo.com/", "Globo"));
sites.push(new Estadao("https://www.estadao.com.br/", "Estadao"));
sites.push(new Uol("https://www.uol.com.br/", "Uol"));

// para cada site, passa o objeto para a função que o imprime
sites.forEach(site => {
    outputWriter(site);
})
