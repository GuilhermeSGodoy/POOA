const cheerio = require('cheerio');

const SiteAbstract = require("./_SiteAbstract").SiteClass;
const openSite = require("../utils/openSite").openSite;

class Globo extends SiteAbstract {
    constructor(url, name) {
        super(url, name);
    }

    async getTitles() {
        const siteData = await openSite(this.url);
        const $ = cheerio.load(siteData);

        let titles = [];
        
        const htmlItems = $('.post__title');

        htmlItems.each(function() {
            titles.push($(this).text());
        })

        return titles;
    }
}

module.exports = {Globo: Globo}