const express = require('express');
const path = require('path');
const sites = require('./sites.json');
const app = express();

const CLIENT_PATH = path.join(__dirname, 'client');
const PORT = 8080;

app.use(express.static(CLIENT_PATH));

app.get('/api/search', async (req, res) => {
    try{
        const result = await search(req.query.filter);
        res.send(result);
    }catch(e){
        res.status(e.status).send(e.message);
    }
});

app.listen(PORT, () => {
    console.log('Client listening on port ' + PORT);
});

async function search(filter){
    filter = filter.toLowerCase();
    return sites.filter(site => site.name.toLowerCase().includes(filter));
}