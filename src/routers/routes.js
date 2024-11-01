const express = require('express');
const router = express.Router();

router.get('/', (_, response) => {
    response.send('Libracos baratitos')
})


module.exports = router;