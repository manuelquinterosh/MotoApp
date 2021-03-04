const router = require('express').Router();

const { renderMotosForm,
     createNewMoto,
      renderMotos,
       renderMotosUser,
       rentMoto,
        returnMoto } = require('../controllers/motos.controller');

        const { isAuthenticated } = require('../helpers/auth');


// New Moto
router.get('/motos/add', renderMotosForm);

router.post('/motos/new-motos', createNewMoto);

//Get all motos
router.get('/motos', isAuthenticated, renderMotos);


// Rent moto
router.get('/motos/rent/:id', isAuthenticated, rentMoto);

router.get('/motos/return/:id', isAuthenticated, returnMoto);

module.exports = router;
