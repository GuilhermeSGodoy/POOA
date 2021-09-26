/*
Implementação de uma clase "abstrata". Funciona para
forçar o programador a sobrescrever o método getTitles(),
de forma que todos os sites criados possuam esse método.
*/


class SiteAbstract {
    // construtor que verifica se foi passada uma URL para o site
    constructor(url, name) {
        this.url = url;
        this.name = name;
        if (!this.url) {
            throw new Error("An URL must be provided when creating an SiteAbstract object!");

            // POSSIBILIDADE: verificar se o formato da URL está correto
        } else if (!this.name) {
            throw new Error("An site name must be provided when creating an SiteAbstract object!");
        }
    }

    getUrl() {
        return this.url;
    }

    getName() {
        return this.name;
    }

    // estratégia de busca que será implementada para cada site
    getTitles() {
        throw new Error("Children classes must implement a getTitles method!");
    }
}

module.exports = {SiteClass: SiteAbstract}