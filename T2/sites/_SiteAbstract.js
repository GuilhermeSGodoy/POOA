/*
Implementação de uma clase "abstrata". Funciona para
forçar o programador a sobrescrever o método getTitles(),
de forma que todos os sites criados possuam esse método.
*/


class SiteAbstract {
    // construtor que verifica se foi passada uma URL para o site
    constructor(url) {
        this.url = url;
        if (!this.url) {
            throw new Error("An URL must be provided when creating an SiteAbstract object!");
        }
            // POSSIBILIDADE: verificar se o formato da URL está correto
    }

    getUrl() {
        return this.url;
    }

    // estratégia de busca que será implementada para cada site
    getTitles() {
        throw new Error("Children classes must implement a getTitles method!");
    }
}

module.exports = {SiteClass: SiteAbstract}