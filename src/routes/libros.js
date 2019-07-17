const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator'); //validar paranetros 

const libros = require('../libros.json');

router.get('/', (req, res) => {
    res.json(libros);
});


//crear c
router.post('/create', [
    check('title').exists(),
    check('autor').exists(),
    check('paginas').exists(),
    check('editorial').exists(),
    check('isbn').exists()
], (req, res) => {
    //datos por separado del req
    const { title, autor, paginas, editorial, isbn } = req.body;

    //exepcion con errores y los detalles 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    //obtener el id 
    const id = libros.length + 1;

    //crear el objeto 
    const newLibro = {id, ...req.body};


    libros.push(newLibro);

    res.json({"mensaje": "create", "code": 200, "status" :"OK"});

});


//eliminar
router.delete('/:id',(req, res) =>{
   const {id} = req.params;
   res.json({"data": id}); 
});


//actualizar 
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const { title, autor, paginas, editorial, isbn } = req.body;

    res.json({"mensaje": "update", "code": 200, "status" :"OK"});

});








module.exports = router;