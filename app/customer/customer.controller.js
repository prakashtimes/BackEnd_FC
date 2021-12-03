const customerService = require("./customer.service");
const customerController = {};

customerController.add = async (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send('No data provided.');
      }
      let result = await customerService.add(req.body);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
};

customerController.addToFavorites = async (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send('No data provided.');
      }
      let result = await customerService.addToFavorites(req.body.customerId, req.body.challengeId);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
};

customerController.getChallenges = async (req, res) => {
  try {
    if (!req.query.customerId) {
      res.status(400).send('No data provided.');
    }
    let result = await customerService.getChallenges(req.query.customerId);
    if (result) {
      res.status(201).send(result);
    }
    res.status(404).send();
  } catch (err) {
    return res.status(500).send();
  }
};

customerController.getById = async (req, res) => {
  try {
    if (!req.params.customerId) {
      res.status(400).send('No data provided.');
    }
    let result = await customerService.getById(req.params.customerId);
    if (result) {
      res.status(201).send(result);
    }
    res.status(404).send();
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = customerController;