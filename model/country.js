let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let countrySchema = new Schema({
  name: { type: String },
  states: [{ type: Schema.Types.ObjectId }], // ObjectIds
  continent: { type: String },
  religions: { type: String }, // String
  neighbouring_countires: [{ type: Schema.Types.ObjectId, ref: "Country" }], //   ObjectIds of countires
  area: { type: String },
});

module.exports = mongoose.model("Country", countrySchema);

// name
// states ->
// continent
// population
// ethnicity(religions) -> String
// neighbouring_countires -> ObjectIds of countires
// area
