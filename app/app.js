'user strict';

const net = require('net');
const fs = require('fs');
const util = require('util');

const client = new net.Socket();

// FS File( read , write )
let file = `${__dirname}/../files/data.text`;

// Second Way to read a file with FS (Promisify)
let readFilepromisify = util.promisify(fs.readFile);
// console.log('readFilepromisify : ', readFilepromisify);

readFilepromisify(file)
    .then(data => 
        {
            console.log('data promisify : ',JSON.parse(data.toString()))
            return JSON.parse(data.toString());
        })
    .then(data => writeFile( file, data))
    .catch(error => console.error('There is an error , promise',error))

// Third Way to read a file with FS (Promisify) & async function
async function readFileAsync(file) {
    try
    {
        let data = await readFilepromisify(file);
        console.log('data : ', data);
    }
    catch(error) 
    {
        console.error('There is an error , async',error);
    }
}

readFileAsync(file);

const writeFile = (file,data) =>
{
  console.log('data in write function : ', data);
//   data.firstName = 'Nawal  Suliman ';
//   console.log('data after updated : ', data);
  let data2 = JSON.stringify(data);
  writeFilepromisify(file,data2);
  return data2;
};
