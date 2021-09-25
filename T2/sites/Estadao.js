const cheerio = require('cheerio');

const SiteAbstract = require("./_SiteAbstract").SiteClass;
const openSite = require("../utils/openSite").openSite;

class Estadao extends SiteAbstract {
    constructor(url) {
        super();
        this.url = url;
    }

    // função específica para extrair títulos do estadao.com.br
    async getTitles() {
        const siteData = await openSite(this.url);
        const $ = cheerio.load(siteData);

        let titles = [];
        
        const htmlItems = $('.title');

        htmlItems.each(function() {
            const title = $(this).find("a").text();
            
            if (title) {
                titles.push(title);
            }
        })

        console.log(titles);
    }
}

module.exports = {Estadao: Estadao}