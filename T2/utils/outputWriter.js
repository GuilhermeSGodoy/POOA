function writer(header, data) {
    console.log(header);
    if(data) {
        console.log(data);
    }
    console.log("---------------------------------");
}

module.exports = {writer: writer};