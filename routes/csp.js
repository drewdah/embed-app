var express = require('express');
var router = express.Router();

router.post(`/`, (req, res) => {
    if (req.body) {
        console.log('CSP Violation: ', req.body)
    } else {
        console.log('CSP Violation: No data received!')
    }
    res.status(204).end()
})

module.exports = router;