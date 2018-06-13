const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'ognigga5',
        database : 'smartbrain'
    }
});


const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send(database.users) })


app.post('/signin', (req, res) => {

})


app.post('/register', (req, res) => {
    const{ email, name, password } = req.body;
    db('users')
        .returning('*')
        .insert({
            email: email,
            name: name,
            joined: new Date()
        })
        .then(user =>{
            res.json(user[0]);
        })
        .catch(err => res.status(400).json('unable to register'))
})


app.get('/profile/:id', (req, res) => {
    const{ id } = req.params;
    db.select('*').from('users').where({id})
        .then(user =>{
            console.log(user)
            if(user.length){
                res.json(user[0])
            } else {
                res.status(400).json('Not found');
            }
        })
        .catch(err => res.status(400).json('Not found'))
})



app.put('/image', (req, res) => {
    const {id} = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json('unable to get entries'))
})



app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})