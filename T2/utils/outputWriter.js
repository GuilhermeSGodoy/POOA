const csvWriter = require("./writers/csvWriter");
const consoleWriter = require("./writers/consoleWriter");

// lista de writers
// pode-se adicionar o consoleWriter para escrever o output no console
const writers = [csvWriter];

function outputWriter(site) {
    site.getTitles().then(data => {
        writers.forEach(writer => {
            try {
                writer.write(site, data);
            }
            catch(err) {
                console.error("Writers must have a write(site, data) function!");
            }
        })
    })
}

module.exports = {outputWriter: outputWriter};