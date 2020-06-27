const mongoose = require('mongoose')
const Admin = require('../models/admins.model')
const Users = require('../models/users.model')
const Topic = require('../models/topics.model')
const Bank = require('../models/bank.model')
const Schools = require('../models/schools.model')
const Exams = require('../models/exams.model')

var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/school"
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err != null) {
            console.log(err);
        } else {
            console.log("Connected......");
        }
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to mongoose")
})
connection.on('error', (err) => {
    console.log("Error Connecting: " + err);
})
/* GET users listing. */
router.get('/', function (req, res, next) {
    Users.find((err, docs) => {
        res.json(docs)
    }).catch(e => {
        res.json({ "error": `${e}` })
    })
});

router.post('/create-user', function (req, res, next) {
    console.log('Data from client')
    Users(req.body).save().then((doc) => {
        res.json(doc)
    }).catch(e => {
        res.json({ "error": `${e}` })
    })

});

router.post('/register-bank', function (req, res, next) {
    Bank(req.body).save().then((doc) => {
        res.json(doc)
    }).catch(e => {
        res.json({ "error": `${e}` })
    })

});
router.post('/register-school', function (req, res, next) {
    Schools(req.body).save().then((doc) => {
        res.json(doc)
    }).catch(e => {
        res.json({ "error": `${e}` })
    })

});
router.post('/register-exam', function (req, res, next) {
    Exams(req.body).save().then((doc) => {
        res.json(doc)
    }).catch(e => {
        res.json({ "error": `${e}` })
    })

});
router.post('/add-topic', function (req, res, next) {
    console.log('Data from client')
    Topic(req.body).save().then((doc) => {
        console.log("Saved data")
        res.json(doc)
    }).catch(e => {
        res.json("Error saving data " + e)
    })

});

router.get('/fetch-users', function (req, res, next) {
    Users.find().then((docs) => {
        //console.log(docs)
        res.json({ users: docs })
    }).catch(e => {
        console.log('Error get data')
        console.log(e)
        res.status(400).json({ "error": `${e}` })
    })

});

router.get('/fetch-banks', function (req, res, next) {
    Bank.find().then((docs) => {
        //console.log(docs)
        res.json({ banks: docs })
    }).catch(e => {
        console.log('Error get data')
        console.log(e)
        res.status(400).json({ "error": `${e}` })
    })

});

router.get('/fetch-exams', function (req, res, next) {
    Exams.find().then((docs) => {
        //console.log(docs)
        res.json({ exams: docs })
    }).catch(e => {
        console.log('Error get data')
        console.log(e)
        res.status(400).json({ "error": `${e}` })
    })

});
router.get('/fetch-schools', function (req, res, next) {
    Schools.find().then((docs) => {
        //console.log(docs)
        res.json({ schools: docs })
    }).catch(e => {
        console.log('Error get data')
        console.log(e)
        res.status(400).json({ "error": `${e}` })
    })

});
router.get('/fetch-school/:id', function (req, res, next) {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Schools.findById(req.params.id).then((doc) => {
            res.json({ 'school': doc })
        }).catch(e => {
            res.status(400).json({ "error": `${e}` })
        })
    } else {
        res.json({ 'error': 'Use a valid ID' })
    }

});

router.route('/auth/login').post((req, res) => {
    Users.findOne(req.body).then((doc) => {
        res.json({ 'user': doc })
    }).catch(e => {
        res.status(400).json({ "error": `${e}` })
    })

});
router.route('/user/edit/:id').patch((req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Users.findByIdAndUpdate(req.params.id,req.body).then((doc) => {
            res.json({ 'user': doc })
        }).catch(e => {
            res.status(400).json({ "error": `${e}` })
        })
    } else {
        res.json({ 'error': 'Use a valid ID' })
    }
});

router.route('/user/:id').get((req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Users.findById(req.params.id).then((doc) => {
            res.json({ 'user': doc })
        }).catch(e => {
            res.status(400).json({ "error": `${e}` })
        })
    } else {
        res.json({ 'error': 'Use a valid ID' })
    }
});



router.route('/users/:id').delete((req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Admin.findByIdAndDelete(req.params.id).then((doc) => {
            if (doc !== null) {
                res.json({ 'user': 'User deleted' })
            } else {
                res.json({ 'user': 'User Not found' })
            }
        }).catch(e => {
            res.status(400).json({ "error": `${e}` })
        })

    } else {
        res.json({ 'error': 'Use a valid ID' })
    }
});

router.route('/:id').get((req, res) => {
    Admin.findById(req.params.id).then((doc) => {
        if (doc !== null) {
            res.json(doc)
        } else {
            res.json({ 'user': 'User Not found' })
        }
    }).catch(e => {
        res.status(400).json({ "error": `${e}` })
    })

});

module.exports = router;
