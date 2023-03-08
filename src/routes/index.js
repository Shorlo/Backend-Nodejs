const { Router } = require('express');
const router = Router();

// Raiz
router.get('/', (req, res) =>
{
     res.json({"Title": "Hello world -> Backend"});
});

module.exports = router;
