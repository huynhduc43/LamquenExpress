var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  var number1 = req.body.number1;
  var number2 = req.body.number2;
  var type_calc = req.body.type_calc;
  var result = "";


  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (type_calc){
    case "input-sum":
      result = number1 + number2;
      res.render('index', { 
        title: 'Bé tập tính',
        checked_sum: 'checked',
        style_sum: 'background-color: yellow',
        number1,
        number2,
        result
      });
      break;

    case "input-sub":
      result = number1 - number2;
      res.render('index', { 
        title: 'Bé tập tính',
        checked_sub: 'checked',
        style_sub: 'background-color: yellow',
        number1,
        number2,
        result 
      });
      break;

    case "input-multi":
      result = number1 * number2;
      res.render('index', { 
        title: 'Bé tập tính',
        checked_multi: 'checked',
        style_multi: 'background-color: yellow',
        number1,
        number2,
        result 
      });
      break;

    case "input-div":
      result = number1 / number2;
      res.render('index', { 
        title: 'Bé tập tính',
        checked_div: 'checked',
        style_div: 'background-color: yellow',
        number1,
        number2,
        result 
      });
      break;

    default:
      //result = 0;
      res.render('index', { title: 'Bé tập tính', number1, number2, result });
  }

  //res.render('index', { title: 'Bé tập tính', check_sum: 'checked', number1, number2, result });

});

module.exports = router;
