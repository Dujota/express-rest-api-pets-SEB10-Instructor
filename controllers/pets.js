const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.find();
    // The response object should look
    // {
    //   length: pets.length
    //   page: 1
    //   data: pets
    //   errors: null
    // }
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:petId', async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.petId);

    if (!pet) {
      res.status(404);
      throw new Error('Pet not found');
    }

    res.status(200).json(pet);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: 'oops something went wrong' });
    }
  }
});
module.exports = router;
