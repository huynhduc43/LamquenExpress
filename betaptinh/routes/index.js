var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  const number = req.body.number;
  const result = Math.pow(parseFloat(number),2);
  res.render('index', { title: 'Bé tập tính', number, result });
});

module.exports = router;
