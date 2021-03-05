let rp = require('request-promise');
let path = require('path');
let fs = require('fs');

let articleArray = [];

dataPath = path.join(__dirname, './popular-articles.json');

rp('https://reddit.com/r/popular.json')
    .then(body => {
        JSON.parse(body).data.children.forEach(item => {
            articleArray.push({ title: item.data.title, url: item.data.url, author: item.data.author })
            
        })
        fs.writeFile(dataPath, JSON.stringify(articleArray), (err) => {
            if (err) {
                console.log('error');
                console.log(err);
            }
        });
    });
    