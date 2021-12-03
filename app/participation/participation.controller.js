const participationService = require("./participation.service");
const participationController = {};

participationController.add = async (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send('No data provided.');
      }
      let result = await participationService.add(req.body);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
  };

participationController.getByCustomerId = async(req, res) => {
  try{
    if(!req.query){
      res.status(400).send('Incorrect data provided.');
    }
    let result = await participationService.getByCustomerId(req.query['customerId']);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
  } catch (err) {
      return res.status(500).send();
  }
}

participationController.getByChallengeId = async(req, res) => {
  try{
    if(!req.query){
      res.status(400).send('Incorrect data provided.');
    }
    let result = await participationService.getByChallengeId(req.query['challengeId']);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
  } catch (err) {
      return res.status(500).send();
  }
}

participationController.getParticipation = async(req, res) => {
  try{
    if(!req.query){
      res.status(400).send('Incorrect data provided.');
    }
    let result = await participationService.getParticipation(req.query['challengeId'], req.query['customerId']);
      if (result) {
        res.status(201).send(result);
      }
      res.status(404).send();
  } catch (err) {
      return res.status(500).send();
  }
}

module.exports = participationController;