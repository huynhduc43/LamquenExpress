var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  var number1 = req.body.number1;
  number1 = parseFloat(number1);
  //const result = Math.pow(parseFloat(number),2);
  var number2 = req.body.number2;
  number2 = parseFloat(number2);
 
  var type_calc = req.body.type_calc;

  var result = 0;

  switch (type_calc){
    case "input-sum":
      result = number1 + number2;
        break;

    case "input-sub":
      result = number1 - number2;
      break;

    case "input-multi":
      result = number1 * number2;
      break;

    case "input-div":
      result = number1 / number2;
      break;

    default:
      result = "__" + type_calc + "__";

  }

  res.render('index', { title: 'Bé tập tính', number1, number2, result });

});

module.exports = router;
