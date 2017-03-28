var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET resume. */
router.get('/resume', (req, res, next) => {
  let tmpFile = "./public/pdf/RogerChaoResume.pdf";
  fs.readFile(tmpFile, (err, data) => {
    res.contentType("application/pdf");
    res.send(data);
  });
});

module.exports = router;
