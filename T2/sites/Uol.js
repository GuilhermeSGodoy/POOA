const cheerio = require('cheerio');

const SiteAbstract = require("./_SiteAbstract").SiteClass;
const openSite = require("../utils/openSite").openSite;

class Uol extends SiteAbstract {
    constructor(url) {
        super(url);
    }

    async getTitles() {
        const siteData = await openSite(this.url);
        
        const $ = cheerio.load(siteData);

        let titles = [];
        
        const htmlItems = $('.titulo');

        htmlItems.each(function() {
            titles.push($(this).text());
        })

        return titles;
    }
}

module.exports = {Uol: Uol}