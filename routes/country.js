let express = require("express");
let router = express.Router();
let Country = require("../model/country");

// create new country
router.post("/", (req, res, next) => {
  Country.create(req.body, (err, country) => {
    if (err) return next(err);
    res.send(country);
    // res.send("sucess");
  });
});

// List all countries in asc/desc order.
router.get("/", async (req, res, next) => {
  let country = await Country.find({}).sort({ name: 1 });
  res.send(country);
});

// upadate country
router.put("/:id/edit", async (req, res, next) => {
  let country = await Country.findById(req.params.id);
  if (
    country.neighbouring_countires.includes(req.body.neighbouring_countires)
  ) {
    res.send(country);
  } else {
    let updateCountry = await Country.findByIdAndUpdate(
      req.params.id,
      {
        $push: { neighbouring_countires: req.body.neighbouring_countires },
      },
      { new: true }
    );
    res.send(updateCountry);
  }
});

// delete country
router.delete("/:id/delete", async (req, res, next) => {
  let country = await Country.findByIdAndDelete(req.params.id);
  res.send(country);
});

// list all religions present in entire country dataaset.
router.get("/religions", async (req, res, next) => {
  try {
    let religions = await Country.find({});
    res.send(religions);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

// pakistan 63bfc7417380eca43ac3a11e
// india  63bfc71f1f6c33803c35a8e0
//  china  63bfc974ce710424c3ad03fa
