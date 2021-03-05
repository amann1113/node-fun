let rp = require('request-promise');
let path = require('path');
let fs = require('fs');

rp('https://reddit.com/r/popular.json')
    .then(res => {
        JSON.parse(res).data.children.forEach(post => {
            if (path.extname(post.data.url)) {

                let dataName = `${post.data.id}${path.extname(post.data.url)}`;
                
                rp(post.data.url, { encoding: 'binary' })
                    .then(media => {

                        fs.writeFile(path.join(__dirname, `/downloads/${dataName}`), media, { encoding: 'binary' }, (err) => {
                            if (err) console.log(err);
                        });


                    })

            }
        });
    })
    .catch(err => {
        console.log(err);
    })