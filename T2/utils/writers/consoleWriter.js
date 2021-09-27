function write(site, data) {
    console.log(site.getUrl());
    console.log(data);
    console.log("------------------------------------------------\n\n");
}

module.exports = {write: write};