const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function write(site, data) {
    const path = site.getName() + '.csv';

    const csvWriter = createCsvWriter({
        path: path,
        header: [
            {id: 'site', title: 'SITE'},
            {id: 'title', title: 'TITLE'}
        ]
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