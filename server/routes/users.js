var express = require('express');
var router = express.Router();


let users = [
    {
        email: 'me@mail.ru',
        name: 'Eric Postman',
        phone: '+442952342213',
        age: 25,
    },
    {
        email: 'henryrules@gmail.com',
        name: 'Henry VIII',
        phone: '+443241234143',
        age: 33,
    },
    {
        email: 'fredericchopin@icloud.com',
        name: 'Freddy Chopin',
        phone: '+44999999999',
        age: 425,
    },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(users);
});
router.get('/:id', function (req, res, next) {
    let {id} = req.params;

    let user = users[id];
    if (user !== undefined) {
        res.send(user);
    } else {
        res.status(404); // Not Found
        res.send({})
    }
});
router.post('/', function (req, res) {
    let data = req.body;
    console.log(data)
    res.send(data)
    // res.status(501)  // Not Implemented
})

module.exports = router;
