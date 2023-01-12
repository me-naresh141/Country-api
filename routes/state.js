let express = require("express");
let router = express.Router();
let State = require("../model/state");

router.post("/", async (req, res, next) => {
  let state = await State.create(req.body);
  res.send(state);
});

// list all states for a country in ascending/descending order
router.get("/", async (req, res, next) => {
  let state = await State.find({}).sort({ name: 1 });
  res.send(state);
});

//for a particular state, list all neighbouring states



module.exports = router;

// up 63bfcb8084b304caa1b0c435
//  bhiar 63bfcba2891a4d8e0d8a2b46
