let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Country = require("../model/country");
let stateSchema = new Schema({
  name: { type: String, required: true },
  country: { type: Schema.Types.ObjectId, ref: "Country" }, //    ObjectId of country
  population: { type: Number, required: true },
  area: { type: String, required: true },
  neighbouring_states: [{ type: Schema.Types.ObjectId, ref: "State" }], //   State ObejctIds
});

module.exports = mongoose.model("State", stateSchema);

// name of state
// country -> ObjectId of country
// population
// area
// neighbouring_states -> State ObejctIds
