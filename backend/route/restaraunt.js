const express = require('express');
const router = express.Router();
const{
    getAllrestaraunt,
    getrestarauntById,
    addrestaraunt,
    deleterestaraunt,
    updaterestaraunt,
    filterrestaraunt,
    adduser,
    getAlluser,
    contact,
    getcontact

} = require('../controller/restaraunt');
router.get('/',getAllrestaraunt)
router.get('/:id',getrestarauntById)
router.post('/',addrestaraunt);
router.post('/register',adduser);
router.post('/user/login',getAlluser)
router.put('/:id',updaterestaraunt)
router.delete('/:id',deleterestaraunt)
router.post('/restaraunts',filterrestaraunt)
router.post('/contact',contact)
router.get('/allcontact',getcontact)
module.exports = router;