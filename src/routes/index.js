const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    
    res.json({"message" : "Api con node!"});
});



module.exports = router;