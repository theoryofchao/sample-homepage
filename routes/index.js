var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET resume. */
router.get('/resume', (req, res, next) => {
  let stream = fs.createReadStream("./public/pdf/RogerChaoResume.pdf");
  let filename = "RogerChaoResume.pdf";
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  stream.pipe(res);
});

module.exports = router;
