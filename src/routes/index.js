const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    
    res.json({"mensaje" : "Hola Mundo!"});
});



module.exports = router;