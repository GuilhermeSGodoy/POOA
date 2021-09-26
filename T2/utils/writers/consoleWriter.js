function write(site, data) {
    console.log(site.getName());
    console.log(data);
    console.log("------------------------------------------------\n\n");
}

module.exports = {write: write};