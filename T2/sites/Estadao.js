const cheerio = require('cheerio');

const SiteAbstract = require("./_SiteAbstract").SiteClass;
const openSite = require("../utils/openSite").openSite;

class Estadao extends SiteAbstract {
    constructor(url) {
        super(url);
    }

    // função específica para extrair títulos do estadao.com.br
    async getTitles() {
        const siteData = await openSite(this.url);
        const $ = cheerio.load(siteData);

        let titles = [];
        
        // filtra os elementos html que possuem a classe .title
        const htmlItems = $('.title');

        htmlItems.each(function() {
            // filtro para pegar apenas as classes .title que possuem um atributo 'a' dentro;
            // o motivo é que o site possui a classe .title em outros títulos que não são notícias
            const title = $(this).find("a").text();
            
            if (title) {
                titles.push(title);
            
                // POSSIBILIDADE: adicionar um objeto com título e link da notícia
                // this.titles.push({$(this).text(), $(this).attr("href")});
            }
        })

        return titles;
    }
}

module.exports = {Estadao: Estadao}