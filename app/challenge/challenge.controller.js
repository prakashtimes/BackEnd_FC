const challengeService = require("./challenge.service");
const challengeController = {};

challengeController.add = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send();
    }

    let result = await challengeService.add(req.body);
    if (result) {
      res.status(201).send(result);
    }
    res.status(404).send();
  } catch (err) {
    return res.status(500).send();
  }
};

challengeController.getById = async (req, res) => {
  try {
    let result = await challengeService.getById(req.params['id']);
    if (result) {
      res.status(200).send(result);
    }
    res.status(404).send();
  } catch (err) {
    return res.status(500).send();
  }
};

challengeController.get = async (req, res) => {
  try {
    let result = await challengeService.get();
    if (result) {
      res.status(200).send(result);
    }
    res.status(404).send();
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = challengeController;