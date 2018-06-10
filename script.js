const fs = require('fs');

fs.readFile('./hello.txt', (err, data) =>{
    if(err){
        console.log('errrrrrrrrroooorrrrrr');
    }
    console.log('1', data.toString('utf8'));
})


const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());



fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err)
    }
    console.log('Inception')
})