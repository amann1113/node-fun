const path = require('path');
const fs = require('fs');

const chirpPath = path.join(__dirname, '../chirps.json');

const chirps = [
    {
        id: 1,
        name: 'Austin',
        chirp: 'discraft'
    },
    {
        id: 2,
        name: 'nick',
        chirp: 'innova'
    },
    {
        id: 3,
        name: 'russo',
        chirp: 'mvp'
    },
    {
        id: 4,
        name: 'braden',
        chirp: 'prodigy'
    },
    {
        id: 5,
        name: 'bradley',
        chirp: 'discmania?'
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }
    console.log('chirp!');
});

fs.readFile(chirpPath, (err, data) => {
    if (err) console.log(err);
    const test = JSON.parse(data);
        console.log(test);
});


