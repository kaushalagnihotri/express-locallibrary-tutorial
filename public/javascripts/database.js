/* const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// schema

const movieSchema = mongoose.Schema({
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
  languages: [
    {
      type: String,
    },
  ],
  released: {
    type: Date,
  },
  directors: [
    {
      type: String,
    },
  ],
});

// Define the database URL to connect to.
const mongoDB =
  "mongodb+srv://kaushalkumar150897:VCj2qCDZeV4bsYIl@cluster0.z4mvdwc.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));

async function main() {
   await mongoose.connect(mongoDB);

  // model
  const movieModel = mongoose.model("movie", movieSchema);

  // operation
  // query

  const movies_5 = await movieModel.find().sort("-released").limit(5).lean();

  console.log(movies_5);

  // insert

  await mongoose.disconnect()
}
*/