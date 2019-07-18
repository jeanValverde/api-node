const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator'); //validate params  

const books = require('../books.json');

router.get('/', (req, res) => {
    res.json(books);
});


//create a new book
router.post('/create', [
    check('title').exists(),
    check('author').exists(),
    check('pages').exists(),
    check('editorial').exists(),
    check('isbn').exists()
], (req, res) => {
    //data for separated of request
    const { title, author, pages , editorial, isbn } = req.body;

    //exception with error and details 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    //get by id 
    const id = book.length + 1;

    //create a new object 
    const newBook = {id, ...req.body};


    book.push(newBook);

    res.json({"message": "create", "code": 200, "status" :"OK"});

});


//delete
router.delete('/:id',(req, res) =>{
   const {id} = req.params;
   res.json({"data": id}); 
});


//update 
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const { title, author, pages , editorial, isbn } = req.body;
    res.json({"message": "update", "code": 200, "status" :"OK"});
});



module.exports = router;