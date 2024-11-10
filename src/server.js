const app = require("./app");
const sequelize = require("./database");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    if (process.env.NODE_ENV !== "test") {
      app.listen(PORT, () => {
        logger.info(`Server running on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    logger.error("Database connection failed", err);
  });
