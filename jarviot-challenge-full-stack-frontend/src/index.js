const app = require("./src/app");
const pool = require("./db/index");

const PORT = process.env.PORT || 5000;

pool.connect(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
