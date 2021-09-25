// importa os sites criados
const Globo = require("./sites/Globo").Globo;
const Estadao = require("./sites/Estadao").Estadao;
const Uol = require("./sites/Uol").Uol;

// importa a função que escreve o output
const writer = require("./utils/outputWriter").writer;


// cria objetos dos sites com suas URLs
const globo = new Globo("https://globo.com/");
const estadao = new Estadao("https://www.estadao.com.br/");
const uol = new Uol("https://www.uol.com.br/");

// define a lista de sites
const sites = [globo, estadao, uol];

// para cada site, escreve seu cabeçalho e suas notícias
sites.forEach(async site => {
    const titles = await site.getTitles();
    writer(site.getUrl(), titles);
})
