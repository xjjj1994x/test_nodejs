const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

const path = require('path');
const router = express.Router();

router.get('/external', function (req, res) {
res.sendFile(path.join(__dirname + '/views/external.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/stylesheet1', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/stylesheet2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/stylesheet3', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet3.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/stylesheet4', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet4.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/stylesheet1', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet1.html'));
    //__dirname : It will resolve to your project folder.
});
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static('public'))