let express = require('express');
let app = express();
let mysql = require('mysql')
let cors = require('cors');

app.use(cors());
app.use(express.json());

let db = mysql.createConnection({
    user: 'saltycam',
    host: '35.217.12.89',
    port: 3306,
    password: 'password',
})

app.get('/get', (req, res) =>{
    db.query('select c.id, c.level, c.class, c.level, c.circlet, c.belt, c.pendant, c.cloak, cb.onyx, cb.zircon, cb.spinel, cb.coral, cb.amber, cb.moonstone, cb.opal, cb.beryl, ca.ignis, ca.petram, ca.nebula, ca.joy, ca.procella, ct.aden, ct.eva, ct.speed, ct.authority, ct.venir from characters.character_details c join characters.character_brooches cb on c.id = cb.id join characters.character_talismans ct on c.id = ct.id join characters.character_agathions ca on c.id = ca.id;', (err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/post', (req, res)=> {
    let clas = req.body.clas;
    let level = req.body.level;
    let circlet = req.body.circlet;
    let pendant = req.body.pendant;
    let cloak = req.body.cloak;
    let belt = req.body.belt;

    let onyx = req.body.onyx;
    let coral = req.body.coral;
    let zircon = req.body.zircon;
    let amber = req.body.amber;
    let opal = req.body.opal;
    let moonstone = req.body.moonstone;
    let beryl =req.body.beryl;
    let spinel = req.body.spinel;

    let aden = req.body.aden;
    let speed = req.body.speed;
    let eva = req.body.eva;
    let authority = req.body.authority;
    let venir = req.body.venir;

    let ignis = req.body.ignis;
    let petram = req.body.petram;
    let nebula = req.body.nebula;
    let procella = req.body.procella;
    let joy = req.body.joy;
    
    
    db.query("INSERT INTO characters.character_talismans (aden, eva, speed, authority, venir) VALUES (?, ?, ?, ?,?)", [aden, eva, speed, authority, venir],
    (err, result)=> {
        if(err){
            console.log(err);
        } else {
            return res
        }
    })
    
    db.query("INSERT INTO characters.character_details (class, level, circlet, belt, pendant,cloak) VALUES (?, ?, ?, ?,?,?)", [clas, level, circlet, belt, pendant, cloak],
    (err, result)=> {
        if(err){
            console.log(err);
        } else {
            console.log(ignis, procella, joy, nebula, petram);
            console.log(clas, level, circlet, belt);
            return res
        }
    })


    db.query("INSERT INTO characters.character_agathions (ignis, petram, nebula, joy, procella) VALUES (?, ?, ?, ?,?)", [ignis, petram, nebula, joy, procella],
    (err, result)=> {
        if(err){
            console.log(err);
        } else {
            return res
        }
    })

    db.query("INSERT INTO characters.character_brooches (onyx, zircon, spinel, coral, amber, moonstone, opal, beryl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [onyx, zircon, spinel, coral, amber, moonstone, opal, beryl],
    (err, result)=> {
        if(err){
            console.log(err);
        } else {
            return res
        }
    })
})

app.listen(3001, ()=> {
    console.log("Working");
})