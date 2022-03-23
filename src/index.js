const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 5001;
app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then((res) => {
      console.log(`Listening: http://localhost:${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
  /* eslint-disable no-console */
  /* eslint-enable no-console */
});
