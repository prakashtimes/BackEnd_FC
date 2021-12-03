const restaurantService = require("./restaurant.service");
const restaurantController = {};

restaurantController.add = async(req, res) => {
    try{
      let result = await restaurantService.add(req.body);
      if (result) {
        res.status(200).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
}

restaurantController.getById = async(req, res) => {
    try{
      let result = await restaurantService.getById(req.params['restaurantId']);
      if (result) {
        res.status(200).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
}

restaurantController.updateById = async(req, res) => {
    try{
      let result = await restaurantService.updateById(req.params['restaurantId'], req.body['update']);
      if (result) {
        res.status(200).send(result);
      }
      res.status(404).send();
    } catch (err) {
      return res.status(500).send();
    }
}

restaurantController.getBookings = async(req, res) => {
  try{
    console.log(JSON.stringify(req.query));
    let result = await restaurantService.getBookings(req.query['restaurantId']);
    if (result) {
      res.status(200).send(result);
    }
    res.status(404).send();
  } catch (err) {
    console.log(`err = ${err}`);
    return res.status(500).send();
  }
}

module.exports = restaurantController;