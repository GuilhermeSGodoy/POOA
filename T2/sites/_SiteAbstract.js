/*
Implementação de uma clase "abstrata". Funciona para
forçar o programador a sobrescrever o método getTitles(),
de forma que todos os sites criados possuam esse método.
*/


class SiteAbstract {
    getUrl() {
        return this.url;
    }

    getTitles() {
        throw new Error("Must implement getTitles method!");
    }
}

module.exports = {SiteClass: SiteAbstract}