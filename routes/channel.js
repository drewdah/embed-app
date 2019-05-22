var express = require('express');
var router = express.Router();

router.get('/:channel', function(req, res, next) {
    res.render('channel', { channel: req.params.channel });
});

module.exports = router;
  