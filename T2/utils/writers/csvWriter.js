const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function write(site, data) {

    const csvWriter = createCsvWriter({
        path: 'titles.csv',
        header: [
            {id: 'site', title: 'SITE'},
            {id: 'title', title: 'TITLE'}
        ],
        alwaysQuote: true,
        append: true
    });

    let records = [];

    data.forEach(title => {
        records.push({'site': site.getUrl(), 'title': title});
    })

    csvWriter.writeRecords(records).then(() => {
        console.log('wrote to csv');
    })
}

module.exports = {write: write};