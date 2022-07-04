let express = require('express');
let app = express();
let mysql = require('mysql2');
let cors = require('cors');

app.use(cors());
app.use(express.json());

let ask = 'SELECT * from characters.character_details';
let ask2 = 'SELECT * from characters.character_brooches';
let ask3 = 'SELECT * from characters.character_agathions';
let ask4 = 'select c.id, c.level, c.class, c.level, c.circlet, c.belt, c.pendant, c.cloak, cb.onyx, cb.zircon, cb.spinel, cb.coral, cb.amber, cb.moonstone, cb.opal, cb.beryl, ca.ignis, ca.petram, ca.nebula, ca.joy, ca.procella, ct.aden, ct.eva, ct.speed, ct.authority, ct.venir from characters.character_details c join characters.character_brooches cb on c.id = cb.id join characters.character_talismans ct on c.id = ct.id join characters.character_agathions ca on c.id = ca.id';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'notsalty.eu',
    user: 'saltycam',
    password: 'password',
    database: 'characters'    
});

let fetchCharacter = async () => {
    data = [];
    let promisePool = pool.promise();

    const myData = await promisePool.query(ask4)
    data.push(myData[0][0])
    console.log(data);
}

fetchCharacter();
async function testing() {
    let data = [];

    // now get a Promise wrapped instance of that pool
    const promisePool = pool.promise();
    
    // query database using promises
    const myData = await promisePool.query(ask)
    data.push(myData[0][0])
    const myData2 = await promisePool.query(ask2)
    data.push(myData2[0][0])
    const myData3 = await promisePool.query(ask3)
    data.push(myData3[0][0])
    console.log(data);
    };

    //testing()



app.listen(3001, ()=> {
    console.log("Working");
})