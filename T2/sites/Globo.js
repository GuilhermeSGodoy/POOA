const cheerio = require('cheerio');

const SiteAbstract = require("./_SiteAbstract").SiteClass;
const openSite = require("../utils/openSite").openSite;

class Globo extends SiteAbstract {
    constructor(url) {
        super();
        this.url = url;
    }

    // função específica para extrair títulos do globo.com
    async getTitles() {
        const siteData = await openSite(this.url);
        const $ = cheerio.load(siteData);

        let titles = [];
        
        const htmlItems = $('.post__title');

        htmlItems.each(function() {
            titles.push($(this).text());
        })

        console.log(titles);
    }
}

module.exports = {Globo: Globo}