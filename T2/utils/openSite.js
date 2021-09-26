const axios = require('axios');

// Abre um site utilizando o framework Axios, retorna seu HTML

async function openSite(url) {
    try {
        let res = await axios({baseURL: url, timeout: 30000});

        if (res.status == 200) {
            return res.data;
        }
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = {openSite: openSite}