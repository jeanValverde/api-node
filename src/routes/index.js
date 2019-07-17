const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    
    res.json({"mensaje" : "Api con node!"});
});



module.exports = router;